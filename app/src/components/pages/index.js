import * as React from 'react';
import PriceFeed from './price-feed';
import { Route, Routes } from 'react-router-dom';

export default function Pages() {

  return (
    <Routes>
      {/* <Route path="/arbitrage"></Route>
      <Route path="/nft-feed">nft-feed</Route>
      <Route path="/predictions">predections</Route> */}
      <Route path="*" element={<PriceFeed />} />
    </Routes>
  );
}