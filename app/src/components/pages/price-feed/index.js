import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import PriceFeedList from './price-feed-list';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getProviders, getTokenPrices } from '../../../actions/pricefeed-actions';
import ReactPaginate from 'react-paginate';
import { Dropdown } from 'react-bootstrap';
import useInterval from '../../../use-interval-hook';

function PriceFeed({ getProviders, getTokenPrices, providers, list, count, isLoading }) {
  const [state, setState] = useState({ isCompactView: true, columns: [], skipRows: 0, takeRows: 12, symbol: null, logos: [] });

  // providers loaded
  useEffect(() => {
    // create columns when providers prop changed.
    setState({ ...state, columns: [{ Header: 'Name', accessor: 'name', filter: 'fuzzyText' }].concat(providers.map(col => ({ Header: col.title, accessor: col.name, disableFilters: true, icon: col.icon }))) });
  }, [providers]);

  // component did mount
  useEffect(() => {
    getProviders();
    getTokenPrices(state.symbol, state.skipRows, state.takeRows);
  }, []);

  // fetch data every 10 seconds
  useInterval(() => {
    getTokenPrices(state.symbol, state.skipRows, state.takeRows);
  }, 1e4);

  // filter and paging changed.
  useEffect(() => {
    const lastUseEffectTimeout = setTimeout(() => {
      getTokenPrices(state.symbol, state.skipRows, state.takeRows);
    }, 400);

    return () => clearTimeout(lastUseEffectTimeout);
  }, [state.skipRows, state.takeRows, state.symbol]);


  const handleFilterChange = (filters) => {
    if (filters && Array.isArray(filters) && filters.length > 0)
      setState({ ...state, symbol: filters[0].value });
    else
      setState({ ...state, symbol: null });
  };

  return (
    <div>
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
          <button onClick={() => { setState({ ...state, isCompactView: false }); }} className={`app-button-flat me-2 ${!state.isCompactView ? 'active' : ''}`} aria-label="show in list view"><img src="/assets/images/list.svg" width="22" height="22" alt="price" /></button>
          <button onClick={() => { setState({ ...state, isCompactView: true }); }} className={`app-button-flat ${state.isCompactView ? 'active' : ''}`} aria-label="show in grid view"><img src="/assets/images/grid.svg" width="22" height="22" alt="price" /></button>
        </Col>
      </Row>

      {<PriceFeedList
        filterChanged={handleFilterChange}
        isLoading={isLoading}
        columns={state.columns}
        data={list}
        totalCount={count}
        providers={providers}
        isCompactView={state.isCompactView}
        pageSize={state.takeRows}
        pageIndex={state.skipRows * state.takeRows} />
      }

      {/* pagination section */}
      <Row className="py-3">
        <Col lg="7">
          <ReactPaginate
            className="app-paging"
            breakLabel="..."
            nextLabel={<img src="/assets/images/right-angle.svg" width="22" height="22" />}
            forcePage={Math.floor(state.skipRows / state.takeRows)}
            onPageChange={e => {
              setState({ ...state, skipRows: e.selected * state.takeRows });
            }}
            pageRangeDisplayed={3}
            pageCount={Math.max(1, Math.ceil(count / state.takeRows))}
            previousLabel={<img src="/assets/images/left-angle.svg" width="22" height="22" />}
            renderOnZeroPageCount={null}
          />
        </Col>

        <Col lg="5" className="text-lg-end text-center mt-3 mt-lg-0">
          <Dropdown className="d-inline-block me-2" drop="up"
            onSelect={
              (newVal) => {
                setState({ ...state, takeRows: newVal });
              }
            }
            defaultValue={state.takeRows}>

            <Dropdown.Toggle variant="" id="dropdown-basic" className="app-button sm">
              {state.takeRows}
            </Dropdown.Toggle>

            <Dropdown.Menu variant="dark">
              {[12, 24, 48, 96].map(item => (<Dropdown.Item key={item} active={state.takeRows == item} eventKey={item}>{item}</Dropdown.Item>))}
            </Dropdown.Menu>
          </Dropdown>

          Displaying {+state.skipRows + 1} - {+state.takeRows + +state.skipRows} of {count} records
        </Col>
      </Row>

    </div>
  );
}

PriceFeed.propTypes = {
  getProviders: PropTypes.func,
  providers: PropTypes.array,
  getTokenPrices: PropTypes.func,
  list: PropTypes.array,
  count: PropTypes.number,
  isLoading: PropTypes.bool
};

export default connect(
  state => state.priceFeed,
  dispatch => ({
    getProviders: () => dispatch(getProviders()),
    getTokenPrices: (symbol, skip, limit) => dispatch(getTokenPrices(symbol, skip, limit)),
  })
)(PriceFeed);