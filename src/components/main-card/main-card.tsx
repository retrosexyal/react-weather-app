import React, { useEffect, useState } from "react";
/* import axios, { AxiosResponse } from "axios"; */

export const MainCard = () => {
 /*  const [data, setData] = useState<AxiosResponse | null | void>(); */

 /*  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function(position) {
        console.log(position.coords.latitude, position.coords.longitude);
      });

    const fetchCity = async () => {
      const responce = await axios.get(
        "https://api.openweathermap.org/data/2.5/weather?q=Mogilev&units=metric&appid=3f73d696c605835e25ab5d1c0cf3d788&lang=ru"
      );
      setData(responce);
    };
  }, []); */

  return (
    <div>
        {/* <p>Город: {data?.data.name}</p>
        <img src={`https://openweathermap.org/img/w/${data?.data.weather[0].icon}.png`} alt="d" />
        <p>{Math.round(data?.data.main.temp)}</p>
      <> {console.log(data?.data)}</> */}
    
    </div>
  );
};
