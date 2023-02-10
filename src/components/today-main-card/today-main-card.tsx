import React, { useEffect, useState } from "react";
import { StyledContainer, StyledImgWrapper, StyledTemp, StyledText, StyledTime, StyledToday, StyledWeather } from "./styled";

type TProbs = {
  temp: number;
  city: string;
  ico: string;
};

export const TodayMainCard: React.FC<TProbs> = ({ temp, city, ico }) => {
  const [date, setDate] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDate((new Date).toLocaleTimeString().slice(0, -3));
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <StyledContainer>
      <StyledWeather>
        <div>
          <StyledTemp>{Math.round(temp)}°</StyledTemp>
          <StyledToday>Сегодня</StyledToday>
        </div>
        <StyledImgWrapper>
          <img
            src={`https://openweathermap.org/img/w/${ico}.png`}
            alt="weather picture"
          />
        </StyledImgWrapper>
      </StyledWeather>
      <StyledTime>
        <StyledText>Время: {date}</StyledText>
        <StyledText>Город: {city}</StyledText>
      </StyledTime>
    </StyledContainer>
  );
};
