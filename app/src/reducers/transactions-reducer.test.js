import { ACTIONS } from '../constants'
import initialState from '../initial-state';
import transactionsReducer from './transactions-reducer';

describe("transactions reducer", () => {
    test("should return the initial state", () => {
        expect(transactionsReducer(undefined, {})).toEqual(initialState.transactions);
    })

    test("should handle irrelevant action", () => {
        expect(transactionsReducer(undefined, { type: '' })).toEqual(initialState.transactions);
    })

    test("should insert singular item", () => {
        var newState = transactionsReducer(
            undefined, {
            type: ACTIONS.TRANSACTIONS_INSERT,
            payload: {}
        });

        expect(newState.list.length).toEqual(1);
    })

    test("should insert multiple items", () => {
        var newState = transactionsReducer(
            undefined, {
            type: ACTIONS.TRANSACTIONS_INSERT,
            payload: [...Array(3).keys()]
        });

        expect(newState.list.length).toEqual(3);
    })
})
