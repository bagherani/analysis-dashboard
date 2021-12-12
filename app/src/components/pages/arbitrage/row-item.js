import * as React from 'react';
import PropTypes from 'prop-types';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';


function ArbitrageListItem({ Token0Symbol, Date: date, Token1Symbol, Percent, BuyIn, SellIn, MinRatio, MaxRatio, logoAddress }) {

  const timeSince = (date) => {
    let d = new Date(date);
    return (<span className="text-warning">{d.toLocaleDateString('en-UK')}&nbsp;{d.toLocaleTimeString('en-UK')}</span>);
  };

  const renderTooltip = ({ date, ...props }) => (
    <Tooltip {...props}>
      {timeSince(date.$date)}
    </Tooltip>
  );

  return (
    <tr className="app-arbitrage-list-item">
      <td>
        <img src={logoAddress} width="36" height="36" className="me-2" />
        <span>{Token0Symbol?.toUpperCase()}</span>

        <OverlayTrigger
          placement="bottom"
          delay={{ show: 250, hide: 400 }}
          overlay={props => renderTooltip({ date, ...props })}
        >
          <img src="/assets/images/clock.svg" width="24" height="24" className="ms-2" />
        </OverlayTrigger>
      </td>
      <td className="px-5 text-start">
        <div className="f-weight-500">{BuyIn}</div>
        <span className="text-warning float-start">{MinRatio?.toFixed(2)}</span>
        <span className="text-warning float-end">{Token1Symbol?.toUpperCase()}</span>
        <div className="clearfix"></div>
      </td>
      <td className="px-5 text-start">
        <div className="f-weight-500">{SellIn}</div>
        <span className="text-warning">{MaxRatio?.toFixed(2)}</span>
      </td>
      <td className="text-success text-center">
        {Math.floor(Percent) == Percent ? Percent : Percent?.toFixed(2)}%
      </td>
      <td className="text-center">
        <button className="app-button sm me-2">Action 1</button>
        <button className="app-button sm">Action 2</button>
      </td>
    </tr>
  );

}
ArbitrageListItem.propTypes = {
  Token0Symbol: PropTypes.string,
  Token1Symbol: PropTypes.string,
  Percent: PropTypes.number,
  BuyIn: PropTypes.string,
  SellIn: PropTypes.string,
  MinRatio: PropTypes.number,
  MaxRatio: PropTypes.number,
  logoAddress: PropTypes.number,
  Date: PropTypes.any
};

export default ArbitrageListItem;