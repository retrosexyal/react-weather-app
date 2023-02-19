import styled from "styled-components";
import { StyledFlex } from "../../styles/global";

export const StyledWeatherDetails = styled.div`
  display: flex;
  padding: 20px;
  box-shadow: ${(props) => props.theme.boxShadow.primary};
  border-radius: ${(props) => props.theme.borderRadius.primary};
  width: 100%;
  gap: 20px;
  background: ${(props) => props.theme.colors.background};
`;

export const StyledDetailColumn = styled(StyledFlex)`
  flex-direction: column;
  align-items: start;
  background: ${(props) => props.theme.colors.background};
  svg {
    height: 25%;
    background: ${(props) => props.theme.colors.background};
  }
  p {
    height: 25%;
    display: flex;
    align-items: center;
    color: ${props=>props.theme.colors.secondary};
    font-size: 14px;
    background: ${(props) => props.theme.colors.background};
    @media (max-width:800px) {
      display:none;
    }
  }
  div{
    height: 25%;
    color: ${props=>props.theme.colors.blackWhite};
    display: flex;
    align-items: center;
    background: ${(props) => props.theme.colors.background};
  }
`;
