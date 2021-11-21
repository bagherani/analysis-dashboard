import './header.scss';
import * as React from 'react';
import { Col, Row } from 'react-bootstrap';

export default function Header() {
  return (
    <div className="site-header">
      <Row className="align-items-center">
        <Col sm="12" lg="6">
          <a href="/" className="d-inline-block">
            <img src="/assets/images/logo.svg" width="64" height="56" />
            <img src="/assets/images/logo-title.svg" className="ms-3" width="135" height="23" />
          </a>
        </Col>
        <Col sm="12" lg="6" className="text-end">
          <a href="#">
            <img src="/assets/images/cog.svg" width="27" height="28" />
          </a>
          <button className="app-button ms-3">Connect Wallet</button>
        </Col>
      </Row>
    </div>
  );
}