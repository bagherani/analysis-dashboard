import * as React from 'react';
import { useState } from 'react';
import PriceFeedListItem from '../price-feed-list-item';
import './price-feed-list.scss';
// import PropTypes from 'prop-types';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

function PriceFeedList(/*{ isLoading }*/) {
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
          (<SkeletonTheme baseColor="#3B2C07" highlightColor="#201803"><Skeleton style={{ marginBottom: 10 }} count={5} height={68} borderRadius={15} /></SkeletonTheme>)
          :
          (Array.from(Array(10).keys()).map(key => (
            <PriceFeedListItem key={key} />
          )))
      }
    </>
  );
}

// PriceFeedList.propTypes = {
//   isLoading: PropTypes.bool
// };

export default PriceFeedList;