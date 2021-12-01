import * as React from 'react';
import { Col, OverlayTrigger, Tooltip } from 'react-bootstrap';
import PropTypes from 'prop-types';

function PriceFeedTableCell({ data, providers, showInPercent }) {

  const getProviderIcon = (name) => {
    if (Array.isArray(providers)) {
      let p = providers.find(item => item.name == name);
      if (p)
        return p.icon;
    }

    return '';
  };

  /**
 * compare cell value with `Miracle` value of the same row
 * @param {*} value 
 * @param {*} rowIdx 
 */
  const getCellClass = (value) => {
    if (value < +data['Miracle'])
      return 'text-danger';

    if (value > +data['Miracle'])
      return 'text-success';

    return '';
  };

  const getPrice = () => {
    return 'Miracle' in data ? `$${data['Miracle']}` : '';
  };

  const renderTooltip = ({ key: colName, price, ...props }) => (
    <Tooltip {...props}>
      {colName} <br /> <span className={getCellClass(price)}>{showInPercent ? (Math.abs(+price - +data['Miracle']) / +data['Miracle'] * 100) + '%' : price}</span>
    </Tooltip>
  );

  const getProvidersPrices = () => {
    let cols = Object.keys(data).filter(x => ['name', 'address', 'logoAddress', 'Miracle'].indexOf(x) == -1);
    if (cols.length == 0)
      return <span className="text-muted">No Provider</span>;

    cols = ['Miracle', ...cols];

    let result = (<>
      {cols.map((key, idx) => (
        <li className="d-inline-block m-1" key={idx}>
          <OverlayTrigger
            placement="bottom"
            delay={{ show: 250, hide: 400 }}
            overlay={props => renderTooltip({ key, price: data[key], ...props })}
          >
            <img src={getProviderIcon(key)} alt={key} width="32" height="32" />
          </OverlayTrigger>
        </li>
      ))}
    </>
    );

    return result;
  };

  return (
    <Col lg="6" xl="4" sm="12" className="px-1">
      <div className="app-table-cell d-flex flex-row">
        <div className="w-60 h-100 d-flex flex-column">
          <div>
            <img src={data.logoAddress} width="41" height="41" className="me-2" />
            <span className="f-weight-700">{data.name}</span>
          </div>
          <div className="ms-5 mt-2 f-weight-500">
            {getPrice()}
          </div>
          <div className="mt-auto">
            <span className="text-warning">Status</span>
            <div>
              <img src="/assets/images/status-checked.svg" width="24" height="24" className="me-1" />
              Active
            </div>
          </div>
        </div>
        <div className="w-40 h-100 mt-2">
          <span className="text-warning">Data Providers</span>
          <ul className="mt-2">
            {getProvidersPrices()}
          </ul>
        </div>
      </div>
    </Col>
  );
}


PriceFeedTableCell.propTypes = {
  data: PropTypes.any,
  providers: PropTypes.array,
  showInPercent: PropTypes.bool
};

export default PriceFeedTableCell;