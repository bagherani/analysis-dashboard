import * as React from 'react';
import { Col, Dropdown, Row } from 'react-bootstrap';
import ArbitrageList from './arbitrage-list';

export default function Arbitrage() {
  return (
    <div>
      <Row className="app-page-title-container">
        <Col lg="12" xl="8" className="order-xl-0 order-lg-1 order-0 mt-3 mt-lg-0">
          <h1 className="app-page-title">
            <img src="/assets/images/page-crypto-price-feed.svg" width="48" height="48" alt="crypto logo" className="me-2" />
            &nbsp;Arbitrage
          </h1>
        </Col>
        <Col lg="12" xl="4" className="text-end order-xl-1 order-lg-0 order-1">
          <button className="app-button-flat me-2" aria-label="show in percent"><img src="/assets/images/percent.svg" width="22" height="22" alt="price" /></button>
          <button className="app-button-flat" aria-label="show in dollar"><img src="/assets/images/price.svg" width="22" height="22" alt="price" /></button>
        </Col>
      </Row>

      <ArbitrageList />

      <Row>
        <Col lg="6">
          paging goes here
        </Col>
        <Col lg="6" className="text-lg-end">
          <Dropdown className="d-inline-block me-2" drop="up">
            <Dropdown.Toggle variant="" id="dropdown-basic" className="app-button sm">
              24
            </Dropdown.Toggle>

            <Dropdown.Menu variant="dark">
              <Dropdown.Item>24</Dropdown.Item>
              <Dropdown.Item>48</Dropdown.Item>
              <Dropdown.Item>96</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          Displaying 1 - 24 of 100 records
        </Col>
      </Row>
    </div>
  );
}