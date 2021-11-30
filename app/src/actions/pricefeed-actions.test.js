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
        { title: 'Zoo', name: 'ZooSwap', icon: '/assets/images/providers/ZooSwap.png' },
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

  // test('should fetch data from server', async () => {

  //   let callBack = ({ type, payload }) => {
  //     expect(type).toBe(ACTIONS.FETCH_DONE);
  //   };

  //   let fn = fetchSomething();
  //   await fn(callBack);
  // })

});