import * as React from 'react';
import { Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

function PriceFeedTableCell({ data, providers }) {

  const getProviderIcon = (name) => {
    if (Array.isArray(providers)) {
      console.log(name);
      let p = providers.find(item => item.name == name);
      if (p)
        return p.icon;
    }

    return '';
  };

  const getPrice = () => {
    return data['MiracleSwap'] || 0;
  };

  const getProvidersPrices = () => {
    let cols = Object.keys(data).filter(x => ['name', 'address', 'logoAddress'].indexOf(x) == -1);
    if (cols.length == 0)
      return <span>-</span>;

    let result = (<>
      {cols.map((key, idx) => (
        <li className="d-inline-block" key={idx}>
          <a href="#" title={key}>
            <img src={getProviderIcon(key)} alt={key} width="32" height="32" />
          </a>
        </li>
      ))}
    </>
    );

    return result;
  };

  return (
    <Col lg="6" xl="4" sm="12" className="px-1">
      <div className="app-table-cell d-flex flex-row">
        <div className="w-50 h-100 d-flex flex-column">
          <div>
            <img src={data.logoAddress} width="41" height="41" />
            <span>{data.name}</span>
          </div>
          <div>
            ${getPrice()}
          </div>
          <div className="mt-auto">
            <span className="text-warning">Status</span>
            <div>
              <img src="/assets/images/status-checked.svg" width="24" height="24" />
              Active
            </div>
          </div>
        </div>
        <div className="w-50 h-100 mt-2">
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
  providers: PropTypes.array
};

export default PriceFeedTableCell;