import * as React from 'react';
import { useState } from 'react';
import { Col, Dropdown, Form, Row } from 'react-bootstrap';
import PriceFeedTable from './price-feed-table';
import Paging from '../../shared/paging';
import PriceFeedList from './price-feed-list';

export default function PriceFeed() {
  const [state, setState] = useState({ isGridView: true });

  return (
    <div>
      <Row>
        <Col lg='8'>
          <h1 className="app-page-title">
            <img src="/assets/images/page-crypto-price-feed.svg" width="48" height="48" alt="crypto logo" className="me-2" />
            &nbsp;Cryptocurrency Price Feed
          </h1>
        </Col>
        <Col lg="4" className="text-end">
          <button className="app-button-flat" aria-label="show in percent"><img src="/assets/images/percent.svg" width="22" height="22" alt="price" /></button>
          <button className="app-button-flat" aria-label="show in dollar"><img src="/assets/images/price.svg" width="22" height="22" alt="price" /></button>
          <button onClick={() => { setState({ ...state, isGridView: false }); }} className={`app-button-flat ${!state.isGridView ? 'active' : ''}`} aria-label="show in list view"><img src="/assets/images/list.svg" width="22" height="22" alt="price" /></button>
          <button onClick={() => { setState({ ...state, isGridView: true }); }} className={`app-button-flat ${state.isGridView ? 'active' : ''}`} aria-label="show in grid view"><img src="/assets/images/grid.svg" width="22" height="22" alt="price" /></button>
        </Col>
      </Row>

      <Form.Group controlId="priceFeedTableSearch" className="mb-3 mt-3">
        <Form.Label>Name</Form.Label>
        <Form.Control type="search" name="priceFeedTableSearch" placeholder="Enter the name" className="app-input w-25" />
      </Form.Group>

      {state.isGridView ? (<PriceFeedTable />) : (<PriceFeedList />)}

      <Row>
        <Col lg="6">
          <Paging count={70} currentPage={3} pageSize={24} />
        </Col>
        <Col lg="6" className="text-end">

          <Dropdown className="d-inline-block me-2">
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