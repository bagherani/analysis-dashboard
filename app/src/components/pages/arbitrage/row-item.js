import * as React from 'react';
import PropTypes from 'prop-types';

function ArbitrageListItem({ Token0Symbol, Token1Symbol, Percent, BuyIn, SellIn }) {
  return (
    <tr className="app-arbitrage-list-item">
      <td>
        <img src="/assets/images/coins/btc.svg" width="36" height="36" className="me-2" />
        <span>{Token0Symbol.toUpperCase()}</span>
      </td>
      <td className="px-5 text-start">
        <div className="f-weight-500">{BuyIn}</div>
        <span className="text-warning float-start">$0</span>
        <span className="text-warning float-end">{Token1Symbol.toUpperCase()}</span>
        <div className="clearfix"></div>
      </td>
      <td className="px-5 text-start">
        <div className="f-weight-500">{SellIn}</div>
        <span className="text-warning float-start">$0</span>
        <span className="text-warning float-end">none</span>
        <div className="clearfix"></div>
      </td>
      <td className="text-success text-center">
        {Math.floor(Percent) == Percent ? Percent : Percent.toFixed(2)}%
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