import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState, store } from "../store";

import { IForecastInitialState, Status, IForecastPayload } from "../../interfaces/interfaces";

const initialState: IForecastInitialState = {
  forecast: null,
  loading: false,
  status: Status.COMLETED,
};

export const fetchCityForecast = createAsyncThunk(
  "CityForecast/setCityForecast",
  async (city?:string) => {
    const responce = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=3f73d696c605835e25ab5d1c0cf3d788&lang=ru`
    );
    const data = await responce.data;
    return data as IForecastPayload;
  }
);

const cityForecast = createSlice({
  name: "cityWeather",
  initialState,
  reducers: {
    setCityForecast(state, action: PayloadAction<IForecastPayload>) {
      state.forecast = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchCityForecast.fulfilled,
      (state, action: PayloadAction<IForecastPayload>) => {
        state.forecast = action.payload;
        state.loading = false;
        state.status = Status.COMLETED;
      }
    );
    builder.addCase(
      fetchCityForecast.pending,
      (state) => {
        state.loading = true;
        state.status = Status.LOADING;
      }
    );
    builder.addCase(
      fetchCityForecast.rejected,
      (state) => {
        state.loading = false;
        state.status = Status.ERROR;
      }
    );
  },
  
});

export const { setCityForecast } = cityForecast.actions;

export default cityForecast.reducer;
