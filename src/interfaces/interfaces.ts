export type TMain = {
  feels_like: number;
  temp: number;
  pressure: number;
};

export type TWeather = {
  description: string;
  icon: string;
};

export type TWind = {
    speed: number;
}

export interface IState {
  main: TMain;
  name: string;
  id: number;
  weather: TWeather[];
  wind: TWind;
}


// dssssssssssssssssssssssss



  export interface IForecastMain {
      temp: number;
      feels_like: number;
      temp_min: number;
      temp_max: number;
      pressure: number;
      sea_level: number;
      grnd_level: number;
      humidity: number;
      temp_kf: number;
  }

  export interface Weather {
      id: number;
      main: string;
      description: string;
      icon: string;
  }

  export interface Clouds {
      all: number;
  }

  export interface Wind {
      speed: number;
      deg: number;
      gust: number;
  }

  export interface Sys {
      pod: string;
  }

  export interface Snow {
      "3h": number;
  }

  export interface List {
      dt: number;
      main: IForecastMain;
      weather: Weather[];
      clouds: Clouds;
      wind: Wind;
      visibility: number;
      pop: number;
      sys: Sys;
      dt_txt: string;
      snow: Snow;
  }

  export interface Coord {
      lat: number;
      lon: number;
  }

  export interface City {
      id: number;
      name: string;
      coord: Coord;
      country: string;
      population: number;
      timezone: number;
      sunrise: number;
      sunset: number;
  }

  export interface IForecastPayload {
      cod: string;
      message: number;
      cnt: number;
      list: List[];
      city: City;
  }

  export interface IForecastInitialState {
    forecast: IForecastPayload | null;
    loading: boolean;
    status: Status;
  }

  export enum Status {
    LOADING = "loading",
    COMLETED = "completed",
    ERROR = "error",
  }