/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-shadow
export enum ActionsCounterEnum {
  INCREMENT = 'INCREMENT',
  DECREMENT = 'DECREMENT',
  RESET = 'RESET',
}

export type ActionCounterType = {
  type: string;
  payload: number;
};

export const incrementAction: ActionCounterType = {
  type: ActionsCounterEnum.INCREMENT,
  payload: 1,
};

export const decrementAction: ActionCounterType = {
  type: ActionsCounterEnum.DECREMENT,
  payload: 1,
};

export const resetAction: ActionCounterType = {
  type: ActionsCounterEnum.RESET,
  payload: 0,
};
