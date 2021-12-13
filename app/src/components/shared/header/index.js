import './header.scss';
import * as React from 'react';
import { Col, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';

function Header({ onOpen }) {
  return (
    <div className="app-header">
      <Row className="align-items-center">
        <Col xs="6">
          <button className="app-button-flat d-md-none d-inline-block px-1" onClick={() => { onOpen && onOpen(); }}>
            <img src="/assets/images/menu-handler.svg" width="18" height="18" />
          </button>
          <a href="/" className="d-inline-block ms-2">
            <img src="/assets/images/logo.svg" className="app-logo" width="64" height="56" />
            <img src="/assets/images/logo-title.svg" className="ms-3 d-none d-lg-inline-block" width="135" height="23" />
          </a>
        </Col>
        <Col xs="6" className="text-end">
          <a href="#" className="d-none d-lg-inline-block">
            <img src="/assets/images/cog.svg" width="27" height="28" />
          </a>
          <button className="app-button ms-3">Connect Wallet</button>
        </Col>
      </Row>
    </div>
  );
}

Header.propTypes = {
  onOpen: PropTypes.func
};

export default Header;