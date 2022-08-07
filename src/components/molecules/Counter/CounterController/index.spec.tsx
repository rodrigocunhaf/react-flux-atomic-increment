/* eslint-disable no-undef */
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { CounterController } from '.';
import counterStore from '../../../../stores/counter/index';
import '@testing-library/jest-dom';

const counterControllersMock = [
  {
    id: 'counter_button_01',
    name: 'Decrement -1',
    reduceType: 'DECREMENT',
    styleButton: 'RED',
  },
  {
    id: 'counter_button_02',
    name: 'Reset',
    reduceType: 'RESET',
    styleButton: 'GREEN',
  },
  {
    id: 'counter_button_03',
    name: 'Increment +1',
    reduceType: 'INCREMENT',
    styleButton: 'BLUE',
  },
  {
    id: 'counter_button_04',
    name: 'DEFAULT',
    reduceType: 'DEFAULT',
    styleButton: 'BLUE',
  },
];

// eslint-disable-next-line no-undef
it('Counter Controller...', () => {
  render(
    <Provider store={counterStore}>
      <CounterController controllerButtons={counterControllersMock} />
    </Provider>
  );

  expect(fireEvent.click(screen.getByText('Reset')));
  expect(fireEvent.click(screen.getByText('Increment +1')));
  expect(fireEvent.click(screen.getByText('Decrement -1')));
  expect(fireEvent.click(screen.getByText('DEFAULT')));

  expect(screen.getByText('Reset')).toBeInTheDocument();
});
