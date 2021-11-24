import './nav.scss';
import * as React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

function Nav({ menuIsOpen, onClose }) {

  const closeMenu = () => {
    onClose && onClose();
  };

  return (
    <>
      <div className={`app-nav-overlay ${menuIsOpen ? 'active' : ''}`} onClick={closeMenu}></div>
      <nav className={`app-nav ${menuIsOpen ? 'active' : ''}`}>
        <a href="/" className="d-block d-lg-none mb-5">
          <img src="/assets/images/logo.svg" width="64" height="56" />
          <img src="/assets/images/logo-title.svg" className="ms-3" width="135" height="23" />
        </a>
        <ul>
          <li><NavLink onClick={closeMenu} className={({ isActive }) => (isActive ? 'active' : '')} to="/"><img width="31" height="30" src="/assets/images/nav-price.svg" />&nbsp;Price Feed</NavLink></li>
          <li><NavLink onClick={closeMenu} className={({ isActive }) => (isActive ? 'active' : '')} to="/arbitrage"><img width="31" height="30" src="/assets/images/nav-arbitrage.svg" />&nbsp;Arbitrage</NavLink></li>
          <li><NavLink onClick={closeMenu} className={({ isActive }) => (isActive ? 'active' : '')} to="/nft-feed"><img width="31" height="30" src="/assets/images/nav-nft.svg" />&nbsp;NFT Price Feed</NavLink></li>
          <li><NavLink onClick={closeMenu} className={({ isActive }) => (isActive ? 'active' : '')} to="/predictions"><img width="31" height="30" src="/assets/images/nav-prediction.svg" />&nbsp;Predictions</NavLink></li>
        </ul>
      </nav>
    </>
  );
}


Nav.propTypes = {
  onClose: PropTypes.func,
  menuIsOpen: PropTypes.bool,
};

export default Nav;