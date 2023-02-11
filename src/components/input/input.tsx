import React, { useState } from "react";
import { StyledInput, StyledUl } from "./styled";

export const Input: React.FC = () => {
  const [city, setCity] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value);

    // Filter the suggestions based on the input value
    const filteredSuggestions = cities.filter((city) =>
      city.toLowerCase().startsWith(event.target.value.toLowerCase())
    );

    setSuggestions(filteredSuggestions);
  };

  const handleSelect = (selectedCity: string) => {
    setCity(selectedCity);
    setSuggestions([]);
  };

  return (
    <div style={{ position : "relative" }}>
      <StyledInput type="text" value={city} onChange={handleChange} />
      {city.length > 0 && (
        <StyledUl>
          {suggestions.map((suggestion) => (
            <li key={suggestion} onClick={() => handleSelect(suggestion)}>
              {suggestion}
            </li>
          ))}
        </StyledUl>
      )}
    </div>
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
