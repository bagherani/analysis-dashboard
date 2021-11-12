import initialState from './initial-state'
describe("initial state evaluation", () => {
    test("should initial state be healthy", () => {
        const keys = Object.keys(initialState);
        expect(['transactions']).toEqual(keys);
    })
});