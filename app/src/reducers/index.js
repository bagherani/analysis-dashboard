import { combineReducers } from 'redux';
import priceFeed from './pricefeed-reducer';

const appReducer = combineReducers({
  priceFeed
});

const compbinedReducers = (state, action) => {
  return appReducer(state, action);
};

export default compbinedReducers;