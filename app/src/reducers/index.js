import { combineReducers } from 'redux';
import transactionsReducer from './transactions-reducer'

const appReducer = combineReducers({
    transactionsReducer
})

const compbinedReducers = (state, action) => {
    return appReducer(state, action);
};

export default compbinedReducers;