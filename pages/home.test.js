import { render, screen, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import Home from './index';

afterEach(() => {
  cleanup();
});

test('Render HomePage', () => {
  render(<Home/>);
  const cardElement = screen.getByTestId('home-1');
  expect(cardElement).toBeInTheDocument();
})