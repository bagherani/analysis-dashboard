import React, { useEffect, useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import RowItem from './row-item';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import useInterval from '../../../use-interval-hook';
import { getArbitragePrices } from '../../../actions/arbitrage-actions';
import { getProviders } from '../../../actions/pricefeed-actions';
import { Dropdown } from 'react-bootstrap';
import Select from 'react-select';
import { APP_NAME } from '../../../constants';

function Arbitrage({ getProviders, getArbitragePrices, isLoading, list, providers }) {
  const [state, setState] = useState({ sticky: false, filter: { Percent: 0, BuyIn: [], SellIn: [], Token0Symbol: '' } });

  // component did mount
  useEffect(() => {
    document.title = `${APP_NAME} | Arbitrage`;
    getProviders();
    getArbitragePrices(state.filter);
  }, []);

  // revenue did changed.
  useEffect(() => {
    getArbitragePrices(state.filter);
  }, [state.filter]);

  // fetch data every 10 seconds
  useInterval(() => {
    getProviders();
    getArbitragePrices(state.filter, false);
  }, 1e4);


  const handleFilterChange = (e) => {
    setState({ ...state, filter: { ...state.filter, [e.target.name]: e.target.value } });
    console.log(state.filter);
  };

  const handleTableScroll = (scroll) => {
    if (scroll > 50 && !state.sticky)
      setState({ ...state, sticky: true });

    if (scroll < 50 && state.sticky)
      setState({ ...state, sticky: false });
  };

  const indicatorSeparatorStyle = {
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    marginBottom: 8,
    marginTop: 8,
    width: 1,
  };

  // eslint-disable-next-line react/prop-types
  const IndicatorSeparator = ({ innerProps }) => {
    return <span style={indicatorSeparatorStyle} {...innerProps} />;
  };

  const customStyles = {
    control: (provided) => ({
      ...provided,
      maxWidth: 300,
      backgroundColor: '#2E2204',
      border: 'solid 1px #705618',
      borderRadius: '25px',
      color: '#b9953d',
      '&:hover': {
        border: 'solid 1px #705618',
        backgroundColor: 'transparent',
        outline: 'none',
        boxShadow: '0 0 0px 2px #705618',
        color: '#b9953d',
      },
      '&:focus': {
        border: 'solid 1px #705618',
        backgroundColor: 'transparent',
        outline: 'none',
        boxShadow: '0 0 0px 2px #705618',
        color: '#b9953d',
      }
    }),
    multiValue: (provided) => ({
      ...provided,
      backgroundColor: '#705618',
      color: '#fff',
      fontSize: 11,

    }),
    multiValueLabel: (provided) => ({
      ...provided,
      color: '#fff',
      paddingTop: 5
    }),
    menuList: (provided) => ({
      ...provided,
      borderRadius: 15
    })
  };

  const selectTheme = (theme) => ({
    ...theme,
    borderRadius: 15,
    colors: {
      ...theme.colors,
      primary: '#705618',
      primary25: '#705618',
      primary50: '#705618',
      primary75: '#705618',
      neutral0: '#332606',
      neutral5: '#332606',
      natural10: 'red',
      natural20: '#332606',
      natural30: '#332606',
      natural40: '#332606',
      neutral50: '#b9953d',
      natural60: '#332606',
      natural70: '#332606',
      neutral80: '#b9953d',
      neutral90: '#332606',
    },
  });

  return (
    <div>
      {isLoading ? <div className="app-loading" /> : null}
      <Row className="app-page-title-container">
        <Col lg="12" xl="8" className="order-xl-0 order-lg-1 order-0 mt-3 mt-lg-0">
          <h1 className="app-page-title">
            <img src="/assets/images/nav-arbitrage.svg" width="48" height="48" alt="crypto logo" className="me-2" />
            &nbsp;Arbitrage
          </h1>
        </Col>
        <Col lg="12" xl="4" className="text-end order-xl-1 order-lg-0 order-1">
          {/* percent and dollar buttons goes here */}
        </Col>
      </Row>


      <div className={`table-responsive app-table-container height-larger ${state.sticky ? 'sticked' : ''}`} onScroll={e => handleTableScroll(e.target.scrollTop)}>
        <table>
          <thead>
            <tr>
              <th className="text-start">
                <Form.Group controlId="Token0Symbol" as={Col}>
                  <Form.Control type="search" name="Token0Symbol" placeholder="Enter the name" className="app-input"
                    onChange={handleFilterChange} />
                </Form.Group>
              </th>
              <th className="text-start px-3">
                <Select
                  styles={customStyles}
                  closeMenuOnSelect={false}
                  components={{ IndicatorSeparator }}
                  defaultValue={'UniSwap'}
                  isMulti
                  onChange={options => { setState({ ...state, filter: { ...state.filter, BuyIn: options.map(x => x.value) } }); }}
                  placeholder="Buy position"
                  theme={selectTheme}
                  menuPortalTarget={document.querySelector('body')}
                  options={providers.filter(x => x.name != 'Miracle').map(x => ({ label: x.name, value: x.name }))}
                />
              </th>
              <th className="text-start px-3">
                <Select
                  styles={customStyles}
                  closeMenuOnSelect={false}
                  components={{ IndicatorSeparator }}
                  defaultValue={'UniSwap'}
                  isMulti
                  onChange={options => { setState({ ...state, filter: { ...state.filter, SellIn: options.map(x => x.value) } }); }}
                  placeholder="Sell position"
                  theme={selectTheme}
                  menuPortalTarget={document.querySelector('body')}
                  options={providers.filter(x => x.name != 'Miracle').map(x => ({ label: x.name, value: x.name }))}
                />
              </th>
              <th className="text-start px-5">
                <Dropdown className="d-inline-block" drop="down"
                  onSelect={
                    (newVal) => {
                      setState({ ...state, filter: { ...state.filter, Percent: newVal } });
                    }
                  }
                  defaultValue={state.filter.Percent}>

                  <Dropdown.Toggle variant="" id="dropdown-basic" className="app-input px-5">
                    {state.filter.Percent == 0 ? 'All' : `≥ ${state.filter.Percent}%`}
                  </Dropdown.Toggle>

                  <Dropdown.Menu variant="dark">
                    {[0, 1, 2, 5].map(item => (<Dropdown.Item key={item} active={state.filter.Percent == item} eventKey={item}>{item == 0 ? 'All' : `≥ ${item}%`}</Dropdown.Item>))}
                  </Dropdown.Menu>
                </Dropdown>
              </th>
              <th className="text-start px-5">
                <Form.Group controlId="actions" as={Col}>
                  <Form.Control type="search" name="actions" placeholder="Actions" className="app-input app-pointer-event-none" disabled={true} />
                </Form.Group>
              </th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(list) && list.map((row, rowIdx) => (
              <RowItem key={rowIdx} {...row} />
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}


Arbitrage.propTypes = {
  getProviders: PropTypes.func,
  providers: PropTypes.array,
  getArbitragePrices: PropTypes.func,
  list: PropTypes.array,
  isLoading: PropTypes.bool,
  buyIns: PropTypes.array,
};


export default connect(
  state => state.arbitrageFeed,
  dispatch => ({
    getProviders: () => dispatch(getProviders()),
    getArbitragePrices: (percent, showLoading) => dispatch(getArbitragePrices(percent, showLoading)),
  })
)(Arbitrage);
