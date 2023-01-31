import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface Coord {
  lon: number;
  lat: number;
}

interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level: number;
  grnd_level: number;
}

interface Wind {
  speed: number;
  deg: number;
  gust: number;
}

interface Clouds {
  all: number;
}

interface Sys {
  country: string;
  sunrise: number;
  sunset: number;
}

interface ICity {
  coord: Coord;
  weather: Weather[];
  base: string;
  main: Main;
  visibility: number;
  wind: Wind;
  clouds: Clouds;
  dt: number;
  sys: Sys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}


export const fetchCity= createAsyncThunk("city/fetchCityStatus", async () => {
  const responce = await axios.get(
    "https://api.openweathermap.org/data/2.5/weather?&units=metric&appid=3f73d696c605835e25ab5d1c0cf3d788",
    {
      params: {
        q: "Mogilev",
        lang: "ru",
      },
    }
  );
  return responce;
});

const initialState = {
  data: [],
};

const citySlice = createSlice({
  name: "city",
  initialState,
  reducers: {
    setCity(state, action: PayloadAction<ICity>) {
      state.data = action.payload;
    },
  },
});

export const { setCity } = citySlice.actions;

export default citySlice.reducer;
