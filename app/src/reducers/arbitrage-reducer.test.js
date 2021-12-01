import { ACTIONS } from '../constants'
import initialState from '../initial-state';
import arbitrageReducer from './arbitrage-reducer';

describe("arbitrage reducer", () => {
    test("should return the initial state", () => {
        expect(arbitrageReducer(undefined, {})).toEqual(initialState.arbitrageFeed);
    })

    test("should handle irrelevant action", () => {
        expect(arbitrageReducer(undefined, { type: '' })).toEqual(initialState.arbitrageFeed);
    })

    test("should handle loading action", () => {
        expect(arbitrageReducer(undefined, { type: ACTIONS.GET_ARBITRAGE_BEGIN, payload: true }).isLoading).toEqual(true);
    })

    test("should return new list after payload changed", () => {
        let list1 =[1,2,3];
        let list2 = [3,4,5];
        arbitrageReducer(undefined, { type: ACTIONS.GET_ARBITRAGE_DONE, payload: list1 })

        expect(arbitrageReducer(undefined, { type: ACTIONS.GET_ARBITRAGE_DONE, payload: list2 }).list).toEqual(list2);
    })


})
