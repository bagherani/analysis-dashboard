import { combineReducers } from 'redux';
import transactions from './transactions-reducer';

const appReducer = combineReducers({
  transactions
});

const compbinedReducers = (state, action) => {
  return appReducer(state, action);
};

export default compbinedReducers;