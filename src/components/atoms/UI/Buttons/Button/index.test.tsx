/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import { Button } from './index';

const x: Function = () => console.log('ok');

describe('Testing - atoms/UI/Buttons', () => {
  it('RED BUTTON', () => {
    const component = renderer.create(
      <Button onClickHandler={x} styleButton="RED">
        Facebook
      </Button>
    );
    const tree = component.toTree();
    expect(tree).toMatchSnapshot();
  });
  it('GREEN BUTTON', () => {
    const component = renderer.create(
      <Button onClickHandler={x} styleButton="GREEN">
        Facebook
      </Button>
    );
    const tree2 = component.toTree();
    expect(tree2).toMatchSnapshot();
  });
  it('BLUE BUTTON', () => {
    const component = renderer.create(
      <Button onClickHandler={x} styleButton="BLUE">
        Facebook
      </Button>
    );
    const tree3 = component.toTree();
    expect(tree3).toMatchSnapshot();
  });
});
