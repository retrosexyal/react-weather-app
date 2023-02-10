import React from "react";
import { StyledSvgContainer, StyledWeatherDetails } from "./styled";
import { ReactComponent as Precepitation } from "../../assets/svg/precipitation-icon.svg";
import { ReactComponent as Pressure } from "../../assets/svg/pressure-icon.svg";
import { ReactComponent as Temperature } from "../../assets/svg/temperature-icon.svg";
import { ReactComponent as Wind } from "../../assets/svg/wind-icon.svg";

export const WeatherDetails = () => {
  return (
    <StyledWeatherDetails>
      weather-details
      <StyledSvgContainer>
        <Temperature />
        <Pressure />
        <Precepitation />
        <Wind />
      </StyledSvgContainer>
    </StyledWeatherDetails>
  );
};
