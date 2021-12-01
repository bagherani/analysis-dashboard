import axios from 'axios';
import { ACTIONS, API_TOKEN_PRICE } from '../constants';

/**
 * Get the providers list
 * @returns List of providers
 */
export const getProviders = () => dispatch => {
  let providersList = [
    { title: 'Miracle', name: 'Miracle', icon: '/assets/images/providers/MiracleSwap.png' },
    { title: 'Ape', name: 'ApeSwap', icon: '/assets/images/providers/ApeSwap.png' },
    { title: 'Bakery', name: 'BakerySwap', icon: '/assets/images/providers/BakerySwap.png' },
    { title: 'Jet', name: 'JetSwap', icon: '/assets/images/providers/JetSwap.png' },
    { title: 'Paint', name: 'PaintSwap', icon: '/assets/images/providers/PaintSwap.png' },
    { title: 'Pancake', name: 'PancakeSwap', icon: '/assets/images/providers/PancakeSwap.png' },
    { title: 'Soul', name: 'SoulSwap', icon: '/assets/images/providers/SoulSwap.png' },
    { title: 'Spirit', name: 'SpiritSwap', icon: '/assets/images/providers/SpiritSwap.png' },
    { title: 'Spooky', name: 'SpookySwap', icon: '/assets/images/providers/SpookySwap.png' },
    { title: 'Sushi', name: 'SushiSwap', icon: '/assets/images/providers/SushiSwap.png' },
    { title: 'Uni', name: 'UniSwap', icon: '/assets/images/providers/UniSwap.png' },
    { title: 'Zoo', name: 'ZooSwap', icon: '/assets/images/providers/ZooSwap.png' },
  ];

  dispatch({ type: ACTIONS.GET_PROVIDERS_DONE, payload: providersList });
};

export const getTokenPrices = (symbol, skip, take, showLoading = true) => async dispatch => {

  dispatch({ type: ACTIONS.GET_TOKEN_PRICE_BEGIN, payload: showLoading });

  try {

    let symbolFilter = symbol ? `&symbol=${symbol}` : '';
    let result = await axios.get(`${API_TOKEN_PRICE}?skip=${skip}&limit=${take}${symbolFilter}`, axios.defaults);

    dispatch({ type: ACTIONS.GET_TOKEN_PRICE_DONE, payload: result.data });

  } catch (error) {
    dispatch({ type: ACTIONS.GET_TOKEN_PRICE_DONE, payload: null, error });
  }

};
