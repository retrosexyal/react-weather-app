import styled from "styled-components";
import { StyledFlex } from "../../styles/global";

export const StyledWeatherDetails = styled.div`
  display: flex;
  padding: 20px;
  box-shadow: ${(props) => props.theme.boxShadow.primary};
  border-radius: ${(props) => props.theme.borderRadius.primary};
  width: 100%;
  gap: 20px;
`;

export const StyledDetailColumn = styled(StyledFlex)`
  flex-direction: column;
  align-items: start;
  svg {
    height: 25%;
  }
  p {
    height: 25%;
    display: flex;
    align-items: center;
    color: ${props=>props.theme.colors.secondary};
    font-size: 14px;
  }
  div{
    height: 25%;
    color: ${props=>props.theme.colors.black};
    display: flex;
    align-items: center;
  }
`;
