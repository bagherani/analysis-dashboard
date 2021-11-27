import { ACTIONS } from '../constants'
import initialState from '../initial-state';
import pricefeedReducer from './pricefeed-reducer';

describe("pricefeed reducer", () => {
    test("should return the initial state", () => {
        expect(pricefeedReducer(undefined, {})).toEqual(initialState.priceFeed);
    })

    test("should handle irrelevant action", () => {
        expect(pricefeedReducer(undefined, { type: '' })).toEqual(initialState.priceFeed);
    })

    test("should have a list of given providers", () => {
        let providers = [{ title: 'provider1' }];
        expect(pricefeedReducer(undefined, { type: ACTIONS.GET_PROVIDERS_DONE, payload: providers }).providers).toEqual(providers);
    })

})
