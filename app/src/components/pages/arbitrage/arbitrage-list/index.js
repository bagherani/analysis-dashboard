import * as React from 'react';
import RowItem from './row-item';
import { Col, Form, Row } from 'react-bootstrap';

export default function ArbitrageList() {
  return (
    <>
      <Row className="mb-3 mt-3">
        <Form.Group controlId="searchByName" as={Col}>
          <Form.Label>Name</Form.Label>
          <Form.Control type="search" name="searchByName" placeholder="Enter the name" className="app-input" />
        </Form.Group>
        <Form.Group controlId="searchByBuyPosition" as={Col}>
          <Form.Label>Buy Position</Form.Label>
          <Form.Control type="search" name="searchByBuyPosition" placeholder="Buy position" className="app-input" />
        </Form.Group>
        <Form.Group controlId="searchBySellPosition" as={Col}>
          <Form.Label>Sell Position</Form.Label>
          <Form.Control type="search" name="searchBySellPosition" placeholder="Sell position" className="app-input" />
        </Form.Group>
        <Form.Group controlId="searchByRevenue" as={Col}>
          <Form.Label>Revenue</Form.Label>
          <Form.Control type="search" name="searchByRevenue" placeholder="Revenue" className="app-input" />
        </Form.Group>
        <Form.Group controlId="actions" as={Col}>
          <Form.Label>&nbsp;</Form.Label>
          <Form.Control type="search" name="actions" placeholder="Actions" className="app-input app-pointer-event-none" disabled={true} />
        </Form.Group>
      </Row>
      
      <RowItem />

    </>
  );
}