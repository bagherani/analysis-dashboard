import { ACTIONS } from '../constants';
import initialState from '../initial-state';

const arbitrageReducer = (state = initialState.arbitrageFeed, action) => {
  
  switch (action.type) {
  case ACTIONS.GET_ARBITRAGE_BEGIN:
    return {...state, isLoading: action.payload};

  case ACTIONS.GET_ARBITRAGE_DONE:{
    if(action.error){
      return {...state, isLoading: false, error: action.error};
    }
    
    return {...state, isLoading: false, list: action.payload};
  }
  default:
    return state;
  }
};

export default arbitrageReducer;