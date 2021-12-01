import axios from 'axios';
import { ACTIONS, API_ARBITRAGE } from '../constants';

/**
 * get arbitrage prices from the server.
 * @param {*} revenuePercent 
 * @param {*} showLoading 
 * @returns 
 */
export const getArbitragePrices = (revenuePercent, showLoading = true) => async dispatch => {

  dispatch({ type: ACTIONS.GET_ARBITRAGE_BEGIN, payload: showLoading });

  try {

    let result = await axios.get(`${API_ARBITRAGE}/${revenuePercent}`, axios.defaults);

    dispatch({ type: ACTIONS.GET_ARBITRAGE_DONE, payload: result.data });
    return result;

  } catch (error) {
    dispatch({ type: ACTIONS.GET_ARBITRAGE_DONE, payload: null, error });
    return null;
  }

};
