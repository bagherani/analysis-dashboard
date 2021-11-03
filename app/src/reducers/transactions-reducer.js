import { ACTIONS } from '../constants'

import initialState from '../initial-state';

const transactionsReducer = (state = initialState.transactions, action) => {
    switch (action.type) {
        case ACTIONS.TRANSACTIONS_BEGIN_GET:
            return {
                ...state,
                isLoading: true,
            };

        case ACTIONS.TRANSACTIONS_RECEIVED:
            return {
                ...state,
                list: action.payload,
                error: action.error,
                isLoading: false,
            };


        default:
            return state
    }
}

export default transactionsReducer