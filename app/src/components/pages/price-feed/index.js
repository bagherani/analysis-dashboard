import React, { useEffect, useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import PriceFeedTable from './price-feed-table';
import PriceFeedList from './price-feed-list';
import makeData from '../../../makeData';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getProviders, getTokenPrices } from '../../../actions/pricefeed-actions';

function PriceFeed({ getProviders, getTokenPrices, providers, list, count}) {
  const [state, setState] = useState({ isGridView: true });

  useEffect(() => {
    getProviders();

    
    let fetchDataInterval = setInterval(() => {
      getTokenPrices();
    }, 10000);

    return () => {
      clearInterval(fetchDataInterval);
    };
  }, []);

  const columns = React.useMemo(
    () => [
      {
        Header: 'Name',
        accessor: 'name',
        filter: 'fuzzyText',
      },
      {
        Header: 'PancakeSwap',
        accessor: 'pancakeSwap',
        disableFilters: true
      },
      {
        Header: 'UniSwap',
        accessor: 'uniSwap',
        disableFilters: true
      },
      {
        Header: 'BakerySwap',
        accessor: 'bakerySwap',
        disableFilters: true
      },
      {
        Header: 'Dex4',
        accessor: 'dex4',
        disableFilters: true
      },
      {
        Header: 'Dex5',
        accessor: 'dex5',
        disableFilters: true
      },
      {
        Header: 'Dex6',
        accessor: 'dex6',
        disableFilters: true
      },
      {
        Header: 'Dex7',
        accessor: 'dex7',
        disableFilters: true
      },
      {
        Header: 'Dex8',
        accessor: 'dex8',
        disableFilters: true
      },
    ],
    []
  );

  const data = React.useMemo(() => makeData(50), []);

  return (
    <div>
      count: {count}
      {Array.isArray(list) && list.map((x, idx) => (<div key={idx}>{x.name}</div>))}
      <Row className="app-page-title-container">
        <Col lg="12" xl="8" className="order-xl-0 order-lg-1 order-0 mt-3 mt-lg-0">
          <h1 className="app-page-title">
            <img src="/assets/images/page-crypto-price-feed.svg" width="48" height="48" alt="crypto logo" className="me-2" />
            &nbsp;Cryptocurrency Price Feed
          </h1>
        </Col>
        <Col lg="12" xl="4" className="text-end order-xl-1 order-lg-0 order-1">
          <button className="app-button-flat me-2" aria-label="show in percent"><img src="/assets/images/percent.svg" width="22" height="22" alt="price" /></button>
          <button className="app-button-flat me-2" aria-label="show in dollar"><img src="/assets/images/price.svg" width="22" height="22" alt="price" /></button>
          <button onClick={() => { setState({ ...state, isGridView: false }); }} className={`app-button-flat me-2 ${!state.isGridView ? 'active' : ''}`} aria-label="show in list view"><img src="/assets/images/list.svg" width="22" height="22" alt="price" /></button>
          <button onClick={() => { setState({ ...state, isGridView: true }); }} className={`app-button-flat ${state.isGridView ? 'active' : ''}`} aria-label="show in grid view"><img src="/assets/images/grid.svg" width="22" height="22" alt="price" /></button>
        </Col>
      </Row>

      {state.isGridView ? (<>
        <Form.Group controlId="priceFeedTableSearch" className="mb-3 mt-xl-3 mt-4">
          <Form.Control type="search" name="priceFeedTableSearch" placeholder="Enter the name" className="app-input w-25" />
        </Form.Group>
        <PriceFeedTable providers={providers} />
      </>) :
        (<PriceFeedList columns={columns} data={data} />)}

    </div>
  );
}

PriceFeed.propTypes = {
  getProviders: PropTypes.func,
  providers: PropTypes.array,
  getTokenPrices: PropTypes.func,
  list: PropTypes.array,
  count: PropTypes.number
};

export default connect(
  state => state.priceFeed,
  dispatch => ({
    getProviders: () => dispatch(getProviders()),
    getTokenPrices: (symbol, skip, limit) => dispatch(getTokenPrices(symbol, skip, limit)),
  })
)(PriceFeed);