import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

test('renders Counter App with initial count of 0', () => {
  const { getByText } = render(<App />);
  const incrementButton = getByText('Increment');
  const decrementButton = getByText('Decrement');
  const countText = getByText('Count: 0');

  expect(incrementButton).toBeInTheDocument();
  expect(decrementButton).toBeInTheDocument();
  expect(countText).toBeInTheDocument();
});

test('increment button increases count', () => {
  const { getByText } = render(<App />);
  const incrementButton = getByText('Increment');
  const countText = getByText('Count: 0');

  fireEvent.click(incrementButton);

  expect(countText).toHaveTextContent('Count: 1');
});

test('decrement button decreases count', () => {
  const { getByText } = render(<App />);
  const decrementButton = getByText('Decrement');
  const countText = getByText('Count: 0');

  fireEvent.click(decrementButton);

  expect(countText).toHaveTextContent('Count: -1');
});
