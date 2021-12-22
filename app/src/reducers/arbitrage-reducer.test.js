import { ACTIONS } from '../constants'
import initialState from '../initial-state';
import arbitrageReducer from './arbitrage-reducer';
import mockData from '../arbitrage-data-mock.json';

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

    test("should handle no filtering", () => {
        // {{Token0Symbol: string, Percent: number, BuyIn: string, SellIn: string}} filters 
        let filters = {};
        let theNewState = arbitrageReducer(undefined, { type: ACTIONS.GET_ARBITRAGE_DONE, payload: mockData, filters });

        expect(mockData.length).toBe(theNewState.list.length);
    });

    test("should have logoAddress property", () => {
        let theNewState = arbitrageReducer(undefined, { type: ACTIONS.GET_ARBITRAGE_DONE, payload: mockData, filters: {} });

        expect(mockData.length).toBe(theNewState.list.length);
        let theFirst = theNewState.list[0];

        expect('logoAddress' in theFirst).toBeTruthy();
    });

    test("should handle filtering", () => {
        // {{Token0Symbol: string, Percent: number, BuyIn: string, SellIn: string}} filters 
        let filters = { BuyIn: ['A'] };
        let theNewState = arbitrageReducer(undefined, { type: ACTIONS.GET_ARBITRAGE_DONE, payload: mockData, filters });

        expect(mockData.length).toBeGreaterThan(theNewState.list.length);
    })

    test("list should be sorted desc on Date", () => {
        let theNewState = arbitrageReducer(undefined, { type: ACTIONS.GET_ARBITRAGE_DONE, payload: mockData, filters: {} });
        let sortedCorrectly = true;

        theNewState.list.reduce((prev, curr) => {
            if (prev.Date.$date < curr.Date.$date)
                sortedCorrectly = false;
            return curr;
        }, { Date: { $date: 5e12/* a long future */ } });

        
        expect(sortedCorrectly).toBeTruthy();

    })

})
