import { ACTIONS } from '../constants';
import { getProviders } from './pricefeed-actions';
import path from 'path';
import fs from 'fs';

describe('pricefeed actions', () => {
  test('all providers should be available', () => {

    let dispatch = ({ type, payload }) => {
      expect(type).toBe(ACTIONS.GET_PROVIDERS_DONE);
      expect(Array.isArray(payload)).toBeTruthy();

      let availableProviders = [
        { title: 'ApeSwap', icon: '/assets/images/providers/ApeSwap.png' },
        { title: 'BakerySwap', icon: '/assets/images/providers/BakerySwap.png' },
        { title: 'JetSwap', icon: '/assets/images/providers/JetSwap.png' },
        { title: 'PaintSwap', icon: '/assets/images/providers/PaintSwap.png' },
        { title: 'PancakeSwap', icon: '/assets/images/providers/PancakeSwap.png' },
        { title: 'SoulSwap', icon: '/assets/images/providers/SoulSwap.png' },
        { title: 'SpiritSwap', icon: '/assets/images/providers/SpiritSwap.png' },
        { title: 'SpookySwap', icon: '/assets/images/providers/SpookySwap.png' },
        { title: 'SushiSwap', icon: '/assets/images/providers/SushiSwap.png' },
        { title: 'UniSwap', icon: '/assets/images/providers/UniSwap.png' },
        { title: 'ZooSwap', icon: '/assets/images/providers/ZooSwap.png' },
      ];

      let allProvidersAreAvailable = availableProviders.every(p => payload.findIndex(provider => provider.title == p.title) > -1);
      expect(allProvidersAreAvailable).toBeTruthy();

      let iconIsMissing = false;

      availableProviders.forEach(p => {
        if (!fs.existsSync(path.join(__dirname, '..', '..', 'public', p.icon))) {
          iconIsMissing = true;
        }
      });

      expect(iconIsMissing).toBeFalsy();

    };

    getProviders()(dispatch);

  });
});