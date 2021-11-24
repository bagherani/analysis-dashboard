import * as React from 'react';
import { Col } from 'react-bootstrap';

export default function PriceFeedTableCell() {
  return (
    <Col lg="6" xl="4" sm="12" className="px-1">
      <div className="app-table-cell d-flex flex-row">
        <div className="w-50 h-100 d-flex flex-column">
          <div>
            <img src="/assets/images/coins/btc.svg" width="41" height="41" />
            <span>BTC/USD</span>
          </div>
          <div>
            $61000
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
            {Array.from(Array(10).keys()).map(key => (
              <li className="d-inline-block" key={key}>
                <a href="#">
                  <img src="/assets/images/providers/uniswap.svg" width="30" height="30" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Col>
  );
}