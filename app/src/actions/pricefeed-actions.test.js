import { ACTIONS } from '../constants';
import { getProviders, getTokenPrices } from './pricefeed-actions';
import path from 'path';
import fs from 'fs';

describe('pricefeed actions', () => {
  test('all providers should be available', () => {

    let dispatch = ({ type, payload }) => {
      expect(type).toBe(ACTIONS.GET_PROVIDERS_DONE);
      expect(Array.isArray(payload)).toBeTruthy();

      let acceptableProviders = [
        { title: 'Miracle', name: 'Miracle', icon: '/assets/images/providers/MiracleSwap.png' },
        { title: 'Ape', name: 'ApeSwap', icon: '/assets/images/providers/ApeSwap.png' },
        { title: 'Bakery', name: 'BakerySwap', icon: '/assets/images/providers/BakerySwap.png' },
        { title: 'Jet', name: 'JetSwap', icon: '/assets/images/providers/JetSwap.png' },
        { title: 'Paint', name: 'PaintSwap', icon: '/assets/images/providers/PaintSwap.png' },
        { title: 'Pancake', name: 'PancakeSwap', icon: '/assets/images/providers/PancakeSwap.png' },
        { title: 'Soul', name: 'SoulSwap', icon: '/assets/images/providers/SoulSwap.png' },
        { title: 'Spirit', name: 'SpiritSwap', icon: '/assets/images/providers/SpiritSwap.png' },
        { title: 'Spooky', name: 'SpookySwap', icon: '/assets/images/providers/SpookySwap.png' },
        { title: 'Sushi', name: 'SushiSwap', icon: '/assets/images/providers/SushiSwap.png' },
        { title: 'Uni', name: 'UniSwap', icon: '/assets/images/providers/UniSwap.png' },
        { title: 'Zoo', name: 'ZooCoin', icon: '/assets/images/providers/ZooCoin.png' },
      ];

      let allProvidersAreAvailable = payload.every(p => acceptableProviders.findIndex(provider => provider.name == p.name && provider.title == p.title) > -1);
      expect(allProvidersAreAvailable).toBeTruthy();

      let iconIsMissing = false;

      acceptableProviders.forEach(p => {
        if (!fs.existsSync(path.join(__dirname, '..', '..', 'public', p.icon))) {
          iconIsMissing = true;
        }
      });

      expect(iconIsMissing).toBeFalsy();

    };

    getProviders()(dispatch);

  });

  test('should fetch data from server', async () => {
    let fn = getTokenPrices(null, 0, 1);
    var res = await fn(() => { });

    expect(res).not.toBe(null);
    expect(Object.keys(res.data).length).toBe(2); // {count: xx, `and the first Token itself`: ...}
  })

  test('should fetch data from server with paging', async () => {
    const take = 12;
    const skip = 96;
    let fn = getTokenPrices(null, skip, take);
    var res = await fn(() => { });

    expect(res).not.toBe(null);
    expect(Object.keys(res.data).length).toBe(take + 1); // {count: xx, `and the first Token itself`: ...}
  })

  test('should fetch data from server with symbol search', async () => {
    let fn = getTokenPrices('B', 0, 400);
    var res = await fn(() => { });

    expect(res).not.toBe(null);
    expect(Object.keys(res.data).length).toBeGreaterThan(1);
  })

  test('data should have correct structure', async () => {
    let fn = getTokenPrices(null, 0, 1);
    var res = await fn(() => { });

    expect(res).not.toBe(null);
    expect(Object.keys(res.data).length).toBeGreaterThan(1);

    let keys = Object.keys(res.data);

    let tokenName = keys.find(x => x != 'count');
    expect('price' in res.data[tokenName]).toBeTruthy();
    expect('address' in res.data[tokenName]).toBeTruthy();

  })

});