import React from "react";
import { List } from "../../interfaces/interfaces";
import { StyledImgWrapper } from "../today-main-card/styled";
import { StyledForecastCard, StyledForecastText, StyledForecastTextLast, StyledForecastTitle } from "./styled";

type TProp = {
  forecast: List;
};

export const ForecastCard: React.FC<TProp> = ({ forecast }) => {
    const data = new Date(forecast.dt_txt);
    const currentData = new Date();
    const currentWeekDayInd = currentData.getDay()
    const weekDayInd = data.getDay();
    let today = null;
    let tomorow = null;
    const weekDay = (new Intl.DateTimeFormat('ru-RU', {weekday: "long"}).format(data));
    if (currentWeekDayInd === weekDayInd) {
        today = "Сегодня";
    } else if (currentWeekDayInd + 1 === weekDayInd){
        tomorow = "Завтра";
    }
    const upperCaseFirstLetter = (str:string) =>{
        return str[0].toUpperCase()+str.slice(1, str.length)
    }

  return (
    <StyledForecastCard>
      <StyledForecastTitle>{today || tomorow || upperCaseFirstLetter(weekDay)}</StyledForecastTitle>
      <StyledForecastText>{data.toLocaleDateString('ru-RU', {month: "short", day: "numeric"})}</StyledForecastText>
      <StyledImgWrapper>
        <img
          src={`https://openweathermap.org/img/w/${forecast.weather[0].icon}.png`}
          alt="weather picture"
        />
      </StyledImgWrapper>
      <StyledForecastTitle>{Math.round(forecast.main.temp)}°</StyledForecastTitle>
      <StyledForecastText>{Math.round(forecast.main.feels_like)}°</StyledForecastText>
      <StyledForecastTextLast>{upperCaseFirstLetter(forecast.weather[0].description)}</StyledForecastTextLast>
    </StyledForecastCard>
  );
};
