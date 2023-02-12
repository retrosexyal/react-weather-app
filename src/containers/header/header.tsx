import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as Logo } from "../../assets/svg/logo.svg";
import { ReactComponent as Toggle } from "../../assets/svg/theme_toggle.svg";
import { Input } from "../../components/input";
import { setTheme } from "../../redux/slices/themeSlice";
import { StyledContainer, StyledHeader, StyledTitle } from "./styles";
import { theme, theme2 } from "../../styles/global";
import { RootState } from "../../redux/store";

export const Header = () => {
  const dispatch = useDispatch();
  const currentTheme = useSelector((state: RootState) => state.theme.theme);

  const switchTheme = () => {
    if (currentTheme === theme) {
      dispatch(setTheme(theme2));
    } else {
      dispatch(setTheme(theme));
    }
  };

  return (
    <StyledHeader>
      <StyledContainer>
        <Logo />
        <StyledTitle>REACT WEATHER</StyledTitle>
      </StyledContainer>
      <StyledContainer>
        <Toggle onClick={switchTheme} />
      </StyledContainer>
      <Input />
    </StyledHeader>
  );
};
