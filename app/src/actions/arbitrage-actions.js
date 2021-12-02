import axios from 'axios';
import { ACTIONS, API_ARBITRAGE } from '../constants';

/**
 * get arbitrage prices from the server.
 * @param {{Token0Symbol: string, Percent: number, BuyIn: string, SellIn: string}} filters 
 * @param {*} showLoading 
 * @returns 
 */
export const getArbitragePrices = (filters, showLoading = true) => async dispatch => {

  dispatch({ type: ACTIONS.GET_ARBITRAGE_BEGIN, payload: showLoading });

  try {

    let result = await axios.get(`${API_ARBITRAGE}/${filters.Percent}`, axios.defaults);

    dispatch({ type: ACTIONS.GET_ARBITRAGE_DONE, payload: result.data, filters });
    return result;

  } catch (error) {
    dispatch({ type: ACTIONS.GET_ARBITRAGE_DONE, payload: null, error });
    return null;
  }

};
