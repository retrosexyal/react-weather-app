import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import cityWeather from './slices/cityWeatherSlice'
import themeSlice from './slices/themeSlice';

export const store = configureStore( {
    reducer: {
        theme: themeSlice,
        cityWeather,
    }
})


export type RootState = ReturnType<typeof store.getState>;
export type AddDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AddDispatch>();