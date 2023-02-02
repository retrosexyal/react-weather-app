import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import test from './slices/test';

export const store = configureStore( {
    reducer: {
        test,
    }
})


export type RootState = ReturnType<typeof store.getState>;
export type AddDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AddDispatch>();