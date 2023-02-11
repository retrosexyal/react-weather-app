import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

import { StyledDetailColumn, StyledWeatherDetails } from "./styled";
import { ReactComponent as Precepitation } from "../../assets/svg/precipitation-icon.svg";
import { ReactComponent as Pressure } from "../../assets/svg/pressure-icon.svg";
import { ReactComponent as Temperature } from "../../assets/svg/temperature-icon.svg";
import { ReactComponent as Wind } from "../../assets/svg/wind-icon.svg";

export const WeatherDetails = () => {
  const info = useSelector((state: RootState) => state.cityWeather);
  const press = Math.round(info.main.pressure / 1.33);
  return (
    <StyledWeatherDetails>
      <StyledDetailColumn>
        <Temperature />
        <Pressure />
        <Precepitation />
        <Wind />
      </StyledDetailColumn>
      <StyledDetailColumn>
        <p>Температура</p>
        <p>Давление</p>
        <p>Осадки</p>
        <p>Ветер</p>
      </StyledDetailColumn>
      <StyledDetailColumn>
        <div>
          {Math.round(info.main.temp)}° - ощущается как{" "}
          {Math.round(info.main.feels_like)}°
        </div>
        <div>
          {press} мм ртутного столба -{" "}
          {press < 770 && press > 750
            ? "нормальное"
            : press >= 770
            ? "повышенное"
            : "пониженное"}
        </div>
        <div>{info.weather[0].description}</div>
        <div>{Math.round(info.wind.speed)} м/с </div>
      </StyledDetailColumn>
    </StyledWeatherDetails>
  );
};
