import Head from 'next/head';
import { useEffect, useState } from 'react';
import Title from '../components/Title';
import { Card, Loader } from '../components';
import { GlobalStyle, CardGrid } from './styles';

export default function Home() {
  const [ cryptoData, setCryptoData ] = useState([]);
  const [ specificData, setSpecificData ] = useState();
  const [ stopSignal, setStopSignal ] = useState(true);

  useEffect(() => {
    const ws = new WebSocket('wss://api.foxbit.com.br/');

    ws.addEventListener('open', function open() {
      console.log('connected');

      // GET INSTRUMENTS
      const payloadInstruments = {
        m:0,
        i:2,
        n: 'GetInstruments',
        o: JSON.stringify({ OMSID: 1}),
      };

      ws.send(JSON.stringify(payloadInstruments));

      // EXAMPLE SUBSCRIBE BTCBRL
      // const payload = {
      //   m: 0,
      //   i: 2,
      //   n: 'SubscribeLevel1',
      //   o: JSON.stringify({ InstrumentId: 1}),
      // }

      // ws.send(JSON.stringify(payload));

      if (cryptoData.length > 1 && stopSignal) {
        cryptoData.map((crypto) => {
          const variablePayload = {
            m: 0,
            i: 2,
            n: 'SubscribeLevel1',
            o: JSON.stringify({ InstrumentId: crypto.InstrumentId || 1}),
          }
  
          ws.send(JSON.stringify(variablePayload));
        })
        setStopSignal(false)
      }
    });

    ws.addEventListener('close', function close() {
      console.log('disconnected');
    });

    ws.addEventListener('message', function message(response) {
      const { n, o } = JSON.parse(response.data);
      const channel = n; // GetInstruments | SubscribeLevel1 | Level1UpdateEvent
      let data = []
      if (o) {
        data = JSON.parse(o);
        if (data.length > 1) setCryptoData(data);
      }

      // RESPONSE WITH ALL CRYPTOS
      if (channel === 'GetInstruments') {
        console.log(data, 'all');
      }

      // FIRST RESPONSE
      if (channel === 'SubscribeLevel1') {
        console.log(data, 'first');
      }

      // UPDATES TO SUBSCRIBELEVEL1
      if (channel === 'Level1UpdateEvent') {
        console.log(data, 'updates');
        setSpecificData(data);
      }
    });
  }, [cryptoData]);

  return (
    <div data-testid='home-1'>
      <GlobalStyle />
      <Head>
        <title>Foxbit - Frontend Challenge</title>
        <meta name="description" content="Foxbit frontend challenge" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Title>Foxbit - Frontend Challenge</Title>
        {cryptoData && cryptoData.length < 1 ? 
          <Loader />
        : 
          <CardGrid>
            {cryptoData && cryptoData.map((crypto) => 
              <Card broadData={crypto} specificData={specificData} key={crypto.InstrumentId} />
            )}
          </CardGrid>
        }
      </main>
    </div>
  )
}
