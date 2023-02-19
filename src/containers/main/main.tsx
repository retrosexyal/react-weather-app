import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, useAppDispatch } from "../../redux/store";
import { fetchCityWeather } from "../../redux/slices/cityWeatherSlice";
import { TodayMainCard } from "../../components/today-main-card/today-main-card";
import { WeatherDetails } from "../../components/weather-details";
import { StyledMain } from "./styled";
import { ForecastContainer } from "../forecast-container";

export const Main = () => {
  const dispatch = useAppDispatch();
  const cityWeather = useSelector((state: RootState) => state.cityWeather.main);
  const cityName = useSelector((state: RootState) => state.cityWeather.name);
  const info = useSelector((state: RootState) => state.cityWeather);
  useEffect(() => {
    dispatch(fetchCityWeather("Mogilev"));
  }, []);

  return (
    <StyledMain>
      <TodayMainCard
        temp={cityWeather.temp}
        city={cityName}
        ico={info.weather[0].icon}
      />
      <WeatherDetails />
    </StyledMain>
  );
};
