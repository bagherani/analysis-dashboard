import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import ArbitrageList from './arbitrage-list';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import useInterval from '../../../use-interval-hook';
import { getArbitragePrices } from '../../../actions/arbitrage-actions';

function Arbitrage({ getArbitragePrices, isLoading/*, list*/ }) {
  const [state/*, setState*/] = useState({ revenuePercent: 0 });

  // component did mount
  useEffect(() => {
    getArbitragePrices(0);
  }, []);

  // fetch data every 10 seconds
  useInterval(() => {
    getArbitragePrices(state.revenuePercent, false);
  }, 1e4);

  return (
    <div>
      {isLoading ? <div className="app-loading" /> : null}
      <Row className="app-page-title-container">
        <Col lg="12" xl="8" className="order-xl-0 order-lg-1 order-0 mt-3 mt-lg-0">
          <h1 className="app-page-title">
            <img src="/assets/images/page-crypto-price-feed.svg" width="48" height="48" alt="crypto logo" className="me-2" />
            &nbsp;Arbitrage
          </h1>
        </Col>
        <Col lg="12" xl="4" className="text-end order-xl-1 order-lg-0 order-1">
          {/* percent and dollar buttons goes here */}
        </Col>
      </Row>

      <ArbitrageList />
    </div>
  );
}


Arbitrage.propTypes = {
  getArbitragePrices: PropTypes.func,
  list: PropTypes.array,
  isLoading: PropTypes.bool
};


export default connect(
  state => state.priceFeed,
  dispatch => ({
    getArbitragePrices: (percent, showLoading) => dispatch(getArbitragePrices(percent, showLoading)),
  })
)(Arbitrage);
