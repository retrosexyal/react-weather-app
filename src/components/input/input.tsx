import React, { useState } from "react";
import { fetchCityWeather } from "../../redux/slices/cityWeatherSlice";
import { useAppDispatch } from "../../redux/store";
import { StyledFlex } from "../../styles/global";
import { StyledButton, StyledInput, StyledUl } from "./styled";

export const Input: React.FC = () => {
  const [city, setCity] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const dispatch = useAppDispatch()

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value);

    const filteredSuggestions = cities.filter((city) =>
      city.toLowerCase().startsWith(event.target.value.toLowerCase())
    );

    setSuggestions(filteredSuggestions);
  };

  const handleSelect = (selectedCity: string) => {
    setCity(selectedCity);
    setSuggestions([]);
  };
  const handleCity = () => {
    dispatch(fetchCityWeather(city))
    setCity("")
  };
  const handleBlur =(event: React.ChangeEvent<HTMLInputElement>) => {
    event.target.value = ""
  }

  return (
    <StyledFlex>
      <StyledButton onClick={handleCity}>Выбрать город</StyledButton>
      <div style={{ position: "relative" }}>
        <StyledInput type="text" value={city} onChange={handleChange} onBlur={handleBlur} />
        {city.length > 0 && (
          <StyledUl isHidden={city === ""? "none" : "block"} >
            {suggestions.map((suggestion) => (
              <li key={suggestion} onClick={() => handleSelect(suggestion)}>
                {suggestion}
              </li>
            ))}
          </StyledUl>
        )}
      </div>
    </StyledFlex>
  );
};

const cities = [
  "New York",
  "London",
  "Paris",
  "Berlin",
  "Tokyo",
  "Sydney",
  "Dubai",
  "Singapore",
  "Hong Kong",
  "Могилёв",
  "Минск",
  "Москва",
  "Mogilev",
  "Minsk",
];
