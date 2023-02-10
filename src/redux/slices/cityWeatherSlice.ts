import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState, store } from "../store";

type TMain = {
  feels_like: number;
  temp: number;
};

type TWeather = {
  description: string;
  icon: string;
};

interface IState {
  main: TMain;
  name: string;
  id: number;
  weather: TWeather[];
}

const initialState: IState = {
  main: {
    feels_like: 0,
    temp: 0,
  },
  name: "",
  id: 0,
  weather: [{
    description: "",
    icon: "",
  },]
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
      }
    );
  },
});

export const { setCityWeather } = cityWeather.actions;

export default cityWeather.reducer;
