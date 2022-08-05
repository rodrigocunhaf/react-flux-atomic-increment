import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ActionCounterType, ActionsCounterEnum } from '../../actions/counter';

const initialState = 0;

const reducer = (state: number, action: PayloadAction<ActionCounterType>) => {
  switch (action.payload.type) {
    case ActionsCounterEnum.INCREMENT:
      return state + action.payload.payload;
    case ActionsCounterEnum.DECREMENT:
      return state - action.payload.payload;
    case ActionsCounterEnum.RESET:
      return 0;
    default:
      return state;
  }
};

const counterReducers = createSlice({
  initialState,
  name: 'counter-slice',
  reducers: {
    update: (state, action) => reducer(state, action),
  },
});

export const { update } = counterReducers.actions;

export default counterReducers.reducer;
