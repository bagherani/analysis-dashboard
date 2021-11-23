import * as React from 'react';

export default function PriceFeedListItem() {
  return (
    <div className="app-price-list-item">
      <div>
        <img src="/assets/images/coins/btc.svg" width="36" height="36" />
        <span>BTC/USD</span>
      </div>
      <div>
        $61000
      </div>
      <div className="text-success">
        +%0.5
      </div>
      <div className="text-danger">
        -%0.5
      </div>
      <div className="text-success">
        +%1.1
      </div>
      <div className="text-danger">
        +%5.1
      </div>
    </div>
  );
}