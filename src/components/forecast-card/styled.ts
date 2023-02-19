import styled from "styled-components";
import { StyledFlex } from "../../styles/global";

export const StyledForecastCard = styled(StyledFlex)`
  flex-direction: column;
  align-items: flex-start;
  gap: 7px;
  background: ${(props) => props.theme.colors.card};
  flex: 0 1 20%;
  height: 100%;
  border-radius: 10px;
  padding: 11px;
  @media (max-width: 730px) {
    margin-top: 10px;
    flex: 0 1 30%;
  }
  div {
    background: unset;
    img {
      background: unset;
    }
  }
`;
export const StyledForecastText = styled.div`
  color: ${(props) => props.theme.colors.secondary};
  font-size: 13px;
`;

export const StyledForecastTitle = styled.div`
  color: ${(props) => props.theme.colors.blackWhite};
  font-size: 18px;
`;
export const StyledForecastTextLast = styled.p`
  color: ${(props) => props.theme.colors.secondary};
  font-size: 13px;
  height: 30px;
  background: unset;
`;
