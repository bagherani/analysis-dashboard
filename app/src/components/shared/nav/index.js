import './nav.scss';
import * as React from 'react';
import { NavLink } from 'react-router-dom';

export default function Headers() {
  return (
    <nav className="site-nav">
      <ul>
        <li><NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/"><img width="31" height="30" src="/assets/images/nav-price.svg" />&nbsp;Price Feed</NavLink></li>
        <li><NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/arbitrage"><img width="31" height="30" src="/assets/images/nav-arbitrage.svg" />&nbsp;Arbitrage</NavLink></li>
        <li><NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/nft-feed"><img width="31" height="30" src="/assets/images/nav-nft.svg" />&nbsp;NFT Price Feed</NavLink></li>
        <li><NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/predictions"><img width="31" height="30" src="/assets/images/nav-prediction.svg" />&nbsp;Predictions</NavLink></li>
      </ul>
    </nav>
  );
}
