/* eslint-disable no-undef */
import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import { Button } from './index';

const callFunction = () => 2;

describe('Button', () => {
  it('Button component rendering - RED', () => {
    const element = render(
      <Button styleButton="RED" onClickHandler={callFunction}>
        RED
      </Button>
    );
    expect(element.getByRole('button')).toBeInTheDocument();
    expect(fireEvent.click(element.getByRole('button'))).toEqual(true);
  });

  it('Button component rendering - GREEN', () => {
    const element = render(
      <Button styleButton="GREEN" onClickHandler={callFunction}>
        BLUE
      </Button>
    );
    expect(element.getByRole('button')).toBeInTheDocument();
    expect(fireEvent.click(element.getByRole('button'))).toEqual(true);
  });

  it('Button component rendering - BLUE', () => {
    const element = render(
      <Button styleButton="BLUE" onClickHandler={callFunction}>
        GREEN
      </Button>
    );
    expect(element.getByRole('button')).toBeInTheDocument();
    expect(fireEvent.click(element.getByRole('button'))).toEqual(true);
  });

  it('Button component rendering - NOT THEMED BUTTON', () => {
    const element = render(
      <Button styleButton="" onClickHandler={callFunction}>
        NOT THEME BUTTON
      </Button>
    );
    expect(element.getByRole('button')).toBeInTheDocument();
    expect(fireEvent.click(element.getByRole('button'))).toEqual(true);
  });
});
