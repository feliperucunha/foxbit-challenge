import Head from 'next/head'
import { useEffect } from 'react';
import Title from '../components/Title';
import { useAppContext } from '../context';
import { Card } from '../components';

export default function Home() {
  const { setCryptoData } = useAppContext();

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
      const payload = {
        m: 0,
        i: 2,
        n: 'SubscribeLevel1',
        o: JSON.stringify({ InstrumentId: 1 }),
      }

      ws.send(JSON.stringify(payload));
    });

    ws.addEventListener('close', function close() {
      console.log('disconnected');
    });

    ws.addEventListener('message', function message(response) {
      const { n, o } = JSON.parse(response.data);
      const channel = n; // GetInstruments | SubscribeLevel1 | Level1UpdateEvent
      const data = JSON.parse(o);

      setCryptoData(data);

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
      }
    });
  }, []);

  return (
    <div>
      <Head>
        <title>Foxbit - Frontend Challenge</title>
        <meta name="description" content="Foxbit frontend challenge" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Title>Foxbit - Frontend Challenge</Title>
        <Card />
      </main>
    </div>
  )
}
