import * as React from 'react';

export default function ArbitrageListItem() {
  return (
    <div className="app-arbitrage-list-item">
      <div>
        <img src="/assets/images/coins/btc.svg" width="36" height="36" className="me-2" />
        <span>BTC</span>
      </div>
      <div>
        <div>PancakeSwap</div>
        <span className="text-warning float-start">$61000</span>
        <span className="text-warning float-end">WBNB</span>
        <div className="clearfix"></div>
      </div>
      <div>
        <div>UniSwap</div>
        <span className="text-warning float-start">$61000</span>
        <span className="text-warning float-end">WBNB</span>
        <div className="clearfix"></div>
      </div>
      <div className="text-success text-center">
        +%1.1
      </div>
      <div className="text-center">
        <button className="app-button sm me-2">Action 1</button>
        <button className="app-button sm">Action 2</button>
      </div>
    </div>
  );
}