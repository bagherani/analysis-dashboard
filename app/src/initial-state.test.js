import initialState from './initial-state';

describe("initial state evaluation", () => {

    test("should initial state be healthy", () => {
        const keys = Object.keys(initialState);
        const acceptableKeys = ['priceFeed'];
        expect(keys.every(key => acceptableKeys.indexOf(key) > -1)).toBeTruthy();
    });

});