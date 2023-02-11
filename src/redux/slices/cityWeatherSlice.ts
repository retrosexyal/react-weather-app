import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState, store } from "../store";

import { IState } from "../../interfaces/interfaces";

const initialState: IState = {
  main: {
    feels_like: 0,
    temp: 0,
    pressure: 0,
  },
  name: "",
  id: 0,
  wind: {
    speed: 0,
  },
  weather: [
    {
      description: "",
      icon: "",
    },
  ],
};

export const fetchCityWeather = createAsyncThunk(
  "CityWeather/setCityWeather",
  async () => {
    const responce = await axios.get(
      "https://api.openweathermap.org/data/2.5/weather?q=Mogilev&units=metric&appid=3f73d696c605835e25ab5d1c0cf3d788&lang=ru"
    );
    const data = await responce.data;
    return data as IState;
  }
);

const cityWeather = createSlice({
  name: "cityWeather",
  initialState,
  reducers: {
    setCityWeather(state, action: PayloadAction<IState>) {
      state = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchCityWeather.fulfilled,
      (state, action: PayloadAction<IState>) => {
        state.main = action.payload.main;
        state.name = action.payload.name;
        state.id = action.payload.id;
        state.weather = action.payload.weather;
        state.wind = action.payload.wind;
        state=action.payload;
      }
    );
  },
});

export const { setCityWeather } = cityWeather.actions;

export default cityWeather.reducer;
