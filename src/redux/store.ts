import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import test from './slices/test';
import cityWeather from './slices/cityWeatherSlice'

export const store = configureStore( {
    reducer: {
        test,
        cityWeather,
    }
})


export type RootState = ReturnType<typeof store.getState>;
export type AddDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AddDispatch>();