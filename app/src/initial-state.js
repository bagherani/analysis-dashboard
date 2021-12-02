const initialState = {
  arbitrageFeed: {
    list: [],
    providers: [],
    isLoading: false,
    error: null,
  },

  priceFeed: {
    providers: [],
    list: [],
    isLoading: false,
    error: null,
    count: 0,
  }
};

export default initialState;