import { combineReducers } from 'redux';
import priceFeed from './pricefeed-reducer';
import arbitrageFeed from './arbitrage-reducer';

const appReducer = combineReducers({
  priceFeed,
  arbitrageFeed
  
});

const compbinedReducers = (state, action) => {
  return appReducer(state, action);
};

export default compbinedReducers;