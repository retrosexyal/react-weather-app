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
