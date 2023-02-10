import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, useAppDispatch } from "../../redux/store";
import { fetchCityWeather } from "../../redux/slices/cityWeatherSlice";
import { TodayMainCard } from "../../components/today-main-card/today-main-card";
import { WeatherDetails } from "../../components/weather-details";
import { StyledMain } from "./styled";

export const Main = () => {
  const dispatch = useAppDispatch();
  /*  const data = useSelector( (state: RootState) => state.test.data) */
  const cityWeather = useSelector((state: RootState) => state.cityWeather.main);
  const cityName = useSelector((state: RootState) => state.cityWeather.name);
  const info = useSelector((state: RootState) => state.cityWeather);
  useEffect(() => {
    /* dispatch(fetchTest())
        console.log(data) */
    dispatch(fetchCityWeather());
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
