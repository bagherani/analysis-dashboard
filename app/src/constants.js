export const ACTIONS = {
  'GET_PROVIDERS_DONE': 'GET_PROVIDERS_DONE',
  'GET_TOKEN_PRICE_BEGIN': 'GET_TOKEN_PRICE_BEGIN',
  'GET_TOKEN_PRICE_DONE': 'GET_TOKEN_PRICE_DONE',
  'GET_ARBITRAGE_BEGIN': 'GET_ARBITRAGE_BEGIN',
  'GET_ARBITRAGE_DONE': 'GET_ARBITRAGE_DONE',
};

export const API_ROOT = 'http://95.216.106.78:8000/api';
export const API_TOKEN_LOGO = `${API_ROOT}/tokens/logo`;
export const API_TOKEN_PRICE = `${API_ROOT}/prices/GetTokenPrice`;
export const API_ARBITRAGE = `${API_ROOT}/arbitrage`;
export const APP_NAME = 'Miracle';