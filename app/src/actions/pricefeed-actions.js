import axios from 'axios';
import { ACTIONS, API_TOKEN_PRICE } from '../constants';

/**
 * Get the providers list
 * @returns List of providers
 */
export const getProviders = () => dispatch => {
  let providersList = [
    { title: 'ApeSwap', icon: '/assets/images/providers/ApeSwap.png' },
    { title: 'BakerySwap', icon: '/assets/images/providers/BakerySwap.png' },
    { title: 'JetSwap', icon: '/assets/images/providers/JetSwap.png' },
    { title: 'PaintSwap', icon: '/assets/images/providers/PaintSwap.png' },
    { title: 'PancakeSwap', icon: '/assets/images/providers/PancakeSwap.png' },
    { title: 'SoulSwap', icon: '/assets/images/providers/SoulSwap.png' },
    { title: 'SpiritSwap', icon: '/assets/images/providers/SpiritSwap.png' },
    { title: 'SpookySwap', icon: '/assets/images/providers/SpookySwap.png' },
    { title: 'SushiSwap', icon: '/assets/images/providers/SushiSwap.png' },
    { title: 'UniSwap', icon: '/assets/images/providers/UniSwap.png' },
    { title: 'ZooSwap', icon: '/assets/images/providers/ZooSwap.png' },
  ];

  dispatch({ type: ACTIONS.GET_PROVIDERS_DONE, payload: providersList });
};

export const getTokenPrices = (/*symbol, skip, take*/) => async dispatch => {

  dispatch({ type: ACTIONS.GET_TOKEN_PRICE_BEGIN });

  try {
    let result = await axios.get(API_TOKEN_PRICE, axios.defaults);

    if (result.status != 200)
      throw result.statusText;

    dispatch({ type: ACTIONS.GET_TOKEN_PRICE_DONE, payload: result.data });

  } catch (error) {
    dispatch({ type: ACTIONS.GET_TOKEN_PRICE_DONE, payload: null, error });
  }

};