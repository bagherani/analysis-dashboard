import PropTypes from 'prop-types';
import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { Provider } from 'react-redux';

import thunk from 'redux-thunk';
import reducer from './reducers';
import initialState from './initial-state';
import { applyMiddleware, createStore, compose } from 'redux';
const middleware = [thunk];

function render(ui, { store = createStore(reducer, initialState, compose(applyMiddleware(...middleware))), ...renderOptions } = {}) {
  
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }

  Wrapper.propTypes = {
    children: PropTypes.any
  };
  
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from '@testing-library/react';
// override render method
export { render };
