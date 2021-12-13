import { ACTIONS, API_TOKEN_LOGO } from '../constants';
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

    // client side filter token name.
    theList = theList.filter(item=>!action.filters.Token0Symbol || item.Token0Symbol.toLowerCase().indexOf(action.filters.Token0Symbol.toLowerCase())>-1);

    // client-side filter swaps that user are selected on the columns filter.
    theList = theList.filter(item=>!Array.isArray(action.filters.BuyIn) || action.filters.BuyIn.length == 0 || action.filters.BuyIn.indexOf(item.BuyIn)>-1);
    theList = theList.filter(item=>!Array.isArray(action.filters.SellIn) || action.filters.SellIn.length == 0 || action.filters.SellIn.indexOf(item.SellIn)>-1);
    
    for(let item of theList){
      item.logoAddress = `${API_TOKEN_LOGO}/${item.Token0Address}`;
    }

    theList.sort((a,b)=>{
      return b.Date.$date - a.Date.$date;
    });

    return {...state, isLoading: false, list: theList};
  }
  default:
    return state;
  }
};

export default arbitrageReducer;