import * as React from 'react';
import { useState } from 'react';
import ArbitrageListItem from '../arbitrage-list-item';
import './arbitrage-list.scss';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { Col, Form, Row } from 'react-bootstrap';

export default function ArbitrageList() {
  let [state, setState] = useState({ isLoadingFake: true });

  React.useEffect(() => {
    let timeOut = setTimeout(() => { setState({ ...state, isLoadingFake: false }); }, 1000);

    return () => {
      clearTimeout(timeOut);
    };
  }, []);


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
      {
        state.isLoadingFake ?
          (<SkeletonTheme baseColor="#3B2C07" highlightColor="#201803"><Skeleton style={{ marginBottom: 10 }} count={5} height={68} borderRadius={15} /></SkeletonTheme>)
          :
          (Array.from(Array(10).keys()).map(key => (
            <ArbitrageListItem key={key} />
          )))
      }
    </>
  );
}