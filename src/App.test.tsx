import React from 'react';
import { render, screen } from './test-utils';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/All essential/i);
  expect(linkElement).toBeInTheDocument();
});
