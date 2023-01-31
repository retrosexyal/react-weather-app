import { configureStore } from '@reduxjs/toolkit';
import city from './slices/citySlice';

export const store = configureStore( {
    reducer: {
        city,
    }
})

export type RootState = ReturnType<typeof store.getState>;