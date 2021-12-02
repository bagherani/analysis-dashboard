import { getArbitragePrices } from './arbitrage-actions';

describe('arbitrage actions', () => {

  test('should fetch data from server', async () => {
    let fn = getArbitragePrices({ Percent: 0 });
    var res = await fn(() => { });

    expect(res).not.toBe(null);
    expect(res.data.length).toBeGreaterThan(0);
  })

  test('should have the correct structure', async () => {
    let fn = getArbitragePrices({ Percent: 0 });
    var res = await fn(() => { });

    expect(res).not.toBe(null);
    expect(res.data.length).toBeGreaterThan(0);
    let item1 = res.data[0];
    expect('Token0Symbol' in item1).toBeTruthy();
    expect('Token1Symbol' in item1).toBeTruthy();
    expect('Percent' in item1).toBeTruthy();
    expect('BuyIn' in item1).toBeTruthy();
    expect('SellIn' in item1).toBeTruthy();
  })

});