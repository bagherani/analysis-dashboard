import { ACTIONS, API_TOKEN_LOGO } from '../constants';
import initialState from '../initial-state';

const pricefeedReducer = (state = initialState.priceFeed, action) => {
  
  switch (action.type) {
  case ACTIONS.GET_PROVIDERS_DONE:
    return {...state, providers: action.payload};

  case ACTIONS.GET_TOKEN_PRICE_BEGIN:
    return {...state, isLoading: action.payload};

  case ACTIONS.GET_TOKEN_PRICE_DONE:{
    if(action.error){
      return {...state, isLoading: false, error: action.error};
    }
    
    let newList = [];

    let count = action.payload.count;
    delete action.payload.count;

    for(let key in action.payload){
      let newPrice = {
        name: key,
        address: action.payload[key].address,
        logoAddress:`${API_TOKEN_LOGO}/${action.payload[key].address}` 
      };
      
      Object.assign(newPrice, Object.fromEntries(Object.keys(action.payload[key].price).map(p=>[p, action.payload[key].price[p]])));

      newList.push(newPrice);
    }
    return {...state, isLoading: false, list: newList, count: count};
  }
  default:
    return state;
  }
};

export default pricefeedReducer;