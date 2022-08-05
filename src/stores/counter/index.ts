import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import countValue from '../../reducers/counter/index';

const store = configureStore({
  reducer: {
    countValue,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type counterDispatch = typeof store.dispatch;

export const counterDispatchApp: () => counterDispatch = useDispatch;

export const counterSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
