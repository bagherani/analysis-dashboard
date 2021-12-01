import * as React from 'react';
import PropTypes from 'prop-types';

function ArbitrageListItem({ Token0Symbol, Token1Symbol, Percent, BuyIn, SellIn }) {
  return (
    <tr className="app-arbitrage-list-item">
      <td>
        <img src="/assets/images/coins/btc.svg" width="36" height="36" className="me-2" />
        <span>{Token0Symbol}</span>
      </td>
      <td>
        <div>{BuyIn}</div>
        <span className="text-warning float-start">-</span>
        <span className="text-warning float-end">{Token1Symbol}</span>
        <div className="clearfix"></div>
      </td>
      <td>
        <div>{SellIn}</div>
        <span className="text-warning float-start">-</span>
        <span className="text-warning float-end">&nbsp;</span>
        <div className="clearfix"></div>
      </td>
      <td className="text-success text-center">
        {Percent}%
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
};

export default ArbitrageListItem;