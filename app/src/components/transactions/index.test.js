import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, fireEvent, screen } from '../../test-utils';
import Transactions from './index';

// mock api endpoints.
export const handlers = [
  rest.get('/api/user', (req, res, ctx) => {
    return res(ctx.json('John Smith'), ctx.delay(150))
  })
]

// mock server
const server = setupServer(...handlers)

// Enable API mocking before tests.
beforeAll(() => server.listen())

// Reset any runtime request handlers we may add during the tests.
afterEach(() => server.resetHandlers())

// Disable API mocking after the tests are done.
afterAll(() => server.close())

test('Transaction should rendered correctly', async () => {
  render(<Transactions />);

  expect(screen.getByText(/Recent Transactions/)).toBeInTheDocument();
})