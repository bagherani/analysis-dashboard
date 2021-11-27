import * as React from 'react';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import PriceFeedTableCell from '../price-feed-table-cell';
import './price-feed-table.scss';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import PropTypes from 'prop-types';

function PriceFeedTable({ providers }) {
  let [state, setState] = useState({ isLoadingFake: true });

  React.useEffect(() => {
    let timeOut = setTimeout(() => { setState({ ...state, isLoadingFake: false }); }, 1000);

    return () => {
      clearTimeout(timeOut);
    };
  }, []);

  return (
    <>
      {
        state.isLoadingFake ?
          (<SkeletonTheme baseColor="#3B2C07" highlightColor="#201803"><Skeleton style={{ marginBottom: 10, marginRight: 10 }} count={6} width={370} inline={true} height={177} borderRadius={15} /></SkeletonTheme>)
          :
          (
            <Row className="px-2">
              {Array.from(Array(6).keys()).map(key => (
                <PriceFeedTableCell key={key} providers={providers} />
              ))}
            </Row>
          )
      }
    </>
  );
}

PriceFeedTable.propTypes = {
  providers: PropTypes.array
};

export default PriceFeedTable;