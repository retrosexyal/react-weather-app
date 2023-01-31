import React from "react";
import { ReactComponent as Logo } from "../../assets/svg/logo.svg";
import { ReactComponent as Toggle } from "../../assets/svg/theme_toggle.svg";
import { StyledContainer, StyledHeader, StyledTitle } from "./styles";

export const Header = () => {
  return (
    <StyledHeader>
      <StyledContainer>
        <Logo />
        <StyledTitle>REACT WEATHER</StyledTitle>
      </StyledContainer>
      <StyledContainer>
        <Toggle />
      </StyledContainer>
    </StyledHeader>
  );
};
