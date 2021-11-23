import * as React from 'react';
import PriceFeed from './price-feed';
import Arbitrage from './arbitrage';
import { Route, Routes } from 'react-router-dom';

export default function Pages() {

  return (
    <Routes>
      <Route path="/arbitrage" element={<Arbitrage />} />
      <Route path="*" element={<PriceFeed />} />
    </Routes>
  );
}