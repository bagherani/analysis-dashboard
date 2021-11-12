import combinedReducers from './index';
import initialState from '../initial-state';

describe("combined reducers", () => {
    test("all reducers within the initalState should be combined", () => {
        const combinedReducersNames = Object.keys(combinedReducers(undefined, {}));
        const initialStateKeys = Object.keys(initialState);
        
        expect(combinedReducersNames.sort()).toEqual(initialStateKeys.sort());
    })

})