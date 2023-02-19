import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { fetchCityForecast } from '../../redux/slices/cityForecastSlice';
import { RootState, useAppDispatch } from '../../redux/store';
import { Status } from '../../interfaces/interfaces';
import { ForecastCard } from '../../components/forecast-card';
import { StyledFlex } from '../../styles/global';
import { StyledForecastCont } from './styled';

export const ForecastContainer = () => {
  const dispatch = useAppDispatch();
  const {forecast, status} = useSelector((state:RootState)=>state.cityForecast);
  const cityName = useSelector((state: RootState) => state.cityWeather.name);
  useEffect(()=>{
    dispatch(fetchCityForecast(cityName))
  },[cityName])
  return (
    <StyledForecastCont flexWrap='wrap' justCont='space-between' padding='20px'>{status === Status.COMLETED && forecast?.list.map((e, ind)=> e.dt_txt.endsWith("12:00:00") && <ForecastCard key={e.dt_txt} forecast={e}/>)}</StyledForecastCont>
  )
}
