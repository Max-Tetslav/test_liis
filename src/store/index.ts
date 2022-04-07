import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import createSagaMiddleware from '@redux-saga/core';
import rootReducer from './redusers';

const saga = createSagaMiddleware();

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: [saga],
    devTools: process.env.NODE_ENV !== 'production',
  });
};

export const store = setupStore();

export type AppStore = ReturnType<typeof setupStore>;
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
