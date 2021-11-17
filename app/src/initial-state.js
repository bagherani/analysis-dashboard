const initialState = {
  /**
     * smart contract transactions on the chain
     */
  transactions: {
    /**
         * @type {Array<{name:string}>}
         */
    list: [],
    isLoading: false,
    error: null
  }
};

export default initialState;