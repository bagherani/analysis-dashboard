import './nav.scss';
import * as React from 'react';

export default function Headers() {
  return (
    <div className="site-nav">
      <ul>
        <li><a href="#"><img width="31" height="30" src="/assets/images/nav-price.svg"/>&nbsp;Price Feed</a></li>
        <li><a href="#"><img width="31" height="30" src="/assets/images/nav-arbitrage.svg"/>&nbsp;Arbitrage</a></li>
        <li><a href="#"><img width="31" height="30" src="/assets/images/nav-nft.svg"/>&nbsp;NFT Price Feed</a></li>
        <li><a href="#"><img width="31" height="30" src="/assets/images/nav-prediction.svg"/>&nbsp;Predictions</a></li>
      </ul>
    </div>
  );
}
