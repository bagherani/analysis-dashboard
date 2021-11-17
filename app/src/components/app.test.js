import thunk from 'redux-thunk';
import reducer from '../reducers';
import initialState from '../initial-state';
import { applyMiddleware, createStore, compose } from 'redux';
const composeEnhancers = compose;
const middleware = [thunk];
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from './app';

const store = createStore(reducer, initialState, composeEnhancers(applyMiddleware(...middleware)));

test('renders the app', () => {
  const app = (<Provider store={store}>
    <App />
  </Provider>);

  render(app);
  expect(1).toBe(1)
});
