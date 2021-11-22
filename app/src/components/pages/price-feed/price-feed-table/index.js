import * as React from 'react';
import { Row } from 'react-bootstrap';
import PriceFeedTableCell from '../price-feed-table-cell';
import './price-feed-table.scss';

export default function PriceFeedTable() {
  return (
    <Row className="px-2">
      {Array.from(Array(6).keys()).map(key => (
        <PriceFeedTableCell key={key} />
      ))}
    </Row>
  );
}