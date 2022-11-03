import { render, screen, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import Card from '../components/Card';

afterEach(() => {
  cleanup();
});

test('Render Card Component', () => {
  const cryptoData = [{
    "OMSId": 1,
    "InstrumentId": 1,
    "Symbol": "BTC/BRL",
    "Product1": 1,
    "Product1Symbol": "BTC",
    "Product2": 2,
    "Product2Symbol": "BRL",
    "InstrumentType": "Standard",
    "VenueInstrumentId": 1,
    "VenueId": 1,
    "SortIndex": 0,
    "SessionStatus": "Running",
    "PreviousSessionStatus": "Paused",
    "SessionStatusDateTime": "2020-07-11T01:27:02.851Z",
    "SelfTradePrevention": true,
    "QuantityIncrement": 1e-8,
    "PriceIncrement": 0.01,
    "MinimumQuantity": 1e-8,
    "MinimumPrice": 0.01,
    "VenueSymbol": "BTC/BRL",
    "IsDisable": false,
    "MasterDataId": 0,
    "PriceCollarThreshold": 0,
    "PriceCollarPercent": 0,
    "PriceCollarEnabled": false,
    "PriceFloorLimit": 0,
    "PriceFloorLimitEnabled": false,
    "PriceCeilingLimit": 0,
    "PriceCeilingLimitEnabled": false,
    "CreateWithMarketRunning": true,
    "AllowOnlyMarketMakerCounterParty": false
  }];
  const btcData = {
    "OMSId": 1,
    "InstrumentId": 1,
    "MarketId": "btcbrl",
    "BestBid": "105207.49",
    "BestOffer": "105685.1558",
    "LastTradedPx": 105375.841,
    "LastTradedQty": 0.00009609,
    "LastTradeTime": 1667479037,
    "SessionOpen": 106033.6278,
    "SessionHigh": 105987.6085,
    "SessionLow": 104053.0201,
    "SessionClose": 105726.9092,
    "Volume": 0.00009609,
    "CurrentDayVolume": 42.9429,
    "CurrentDayNumTrades": 591,
    "CurrentDayPxChange": 1623.1361,
    "Rolling24HrVolume": 81.8177,
    "Rolling24NumTrades": 1942,
    "Rolling24HrPxChange": -0.2893,
    "TimeStamp": 1667479048
  };
  render(<Card broadData={cryptoData[0]} specificData={btcData}/>);
  const cardElement = screen.getByTestId('card-1');
  expect(cardElement).toBeInTheDocument();
})