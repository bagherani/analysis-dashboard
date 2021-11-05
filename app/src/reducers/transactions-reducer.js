import { ACTIONS } from '../constants'

import initialState from '../initial-state';

const transactions = (state = initialState.transactions, action) => {
    switch (action.type) {
        case ACTIONS.TRANSACTIONS_LOADING:
            return {
                ...state,
                isLoading: action.payload,
            };

        case ACTIONS.TRANSACTIONS_INSERT:
            var theNewState =
                !Array.isArray(action.payload) ?
                    { ...state, list: [...state.list, action.payload] } :
                    { ...state, list: [...state.list, ...action.payload] }
                ;

            if (theNewState.list.length > 1000) {
                theNewState.list = theNewState.list.slice(0, 1000);
            }
            theNewState.isLoading = false;

            return theNewState;

        default:
            return state
    }
}

export default transactions