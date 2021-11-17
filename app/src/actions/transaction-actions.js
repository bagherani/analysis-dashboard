import { ACTIONS } from '../constants';

/**
 * insert new arrived transactions into store
 * @param {*} data 
 * @returns 
 */
export const insertTransactions = (data) => async dispatch => {
  dispatch({ type: ACTIONS.TRANSACTIONS_INSERT, payload: data });
};

/**
 * set loading
 * @param {boolean} data 
 * @returns 
 */
export const setIsLoading = (data) => async dispatch => {
  dispatch({ type: ACTIONS.TRANSACTIONS_LOADING, payload: data });
};
