/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { App } from './App';
import counterStore from './stores/counter';

it('Rendering App', () => {
  render(
    <Provider store={counterStore}>
      <App />
    </Provider>
  );

  const analisingElement = screen.getByText('Increment Project');
  expect(analisingElement).toBeInTheDocument();
});
