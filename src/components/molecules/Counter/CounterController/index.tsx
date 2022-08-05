import React from 'react';
import {
  ActionsCounterEnum,
  decrementAction,
  incrementAction,
  resetAction,
} from '../../../../actions/counter';
import { update } from '../../../../reducers/counter';
import {
  counterDispatchApp,
  counterSelector,
} from '../../../../stores/counter';
import { CounterFrame } from '../../../atoms/Frames/CounterFrame';
import { DisplayFrame } from '../../../atoms/Frames/DisplayFrame';
import { GrayFrame } from '../../../atoms/Frames/GrayFrame';
import { Button } from '../../../atoms/UI/Buttons/Button';
import { ListButton } from '../../../atoms/UI/Buttons/ListButton';
import { ListButtonItem } from '../../../atoms/UI/Buttons/ListButtonItem';

export type CounterButton = {
  id: string;
  name: string;
  reduceType: string;
  styleButton: string;
};

export type CounterControllerProps = {
  controllerButtons: CounterButton[];
};

const CounterController = ({ controllerButtons }: CounterControllerProps) => {
  const counter = counterSelector((state) => state.countValue);
  const dispatch = counterDispatchApp();

  const selectDispatchButton = (reduceType: string) => {
    switch (reduceType) {
      case ActionsCounterEnum.INCREMENT:
        return dispatch(update(incrementAction));
      case ActionsCounterEnum.DECREMENT:
        return dispatch(update(decrementAction));
      case ActionsCounterEnum.RESET:
        return dispatch(update(resetAction));
      default:
        return dispatch(update(resetAction));
    }
  };

  return (
    <GrayFrame>
      <DisplayFrame>
        <CounterFrame>{counter}</CounterFrame>
      </DisplayFrame>
      <ListButton>
        {controllerButtons.map((button) => (
          <ListButtonItem key={button.id}>
            <Button
              styleButton={button.styleButton}
              onClickHandler={() => {
                selectDispatchButton(button.reduceType);
              }}
            >
              {button.name}
            </Button>
          </ListButtonItem>
        ))}
      </ListButton>
    </GrayFrame>
  );
};

export { CounterController };
