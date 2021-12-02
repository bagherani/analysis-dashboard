import { ACTIONS } from '../constants';
import initialState from '../initial-state';

const arbitrageReducer = (state = initialState.arbitrageFeed, action) => {
  
  switch (action.type) {
  case ACTIONS.GET_PROVIDERS_DONE:
    return {...state, providers: action.payload};
  
  case ACTIONS.GET_ARBITRAGE_BEGIN:
    return {...state, isLoading: action.payload};

  case ACTIONS.GET_ARBITRAGE_DONE:{
    if(action.error){
      return {...state, isLoading: false, error: action.error};
    }
    
    let theList = action.payload;

    // client side filtering
    theList = theList.filter(item=>!action.filters.Token0Symbol || item.Token0Symbol.toLowerCase().indexOf(action.filters.Token0Symbol.toLowerCase())>-1);
    theList = theList.filter(item=>!Array.isArray(action.filters.BuyIn) || action.filters.BuyIn.length == 0 || action.filters.BuyIn.indexOf(item.BuyIn)>-1);
    theList = theList.filter(item=>!Array.isArray(action.filters.SellIn) || action.filters.SellIn.length == 0 || action.filters.SellIn.indexOf(item.SellIn)>-1);

    return {...state, isLoading: false, list: theList};
  }
  default:
    return state;
  }
};

export default arbitrageReducer;