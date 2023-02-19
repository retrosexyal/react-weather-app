import styled from "styled-components"
import { StyledFlex } from "../../styles/global"

export const StyledForecastCont = styled(StyledFlex)`
flex-wrap:nowrap;
justify-contant: space-between;
align-items: flex-start;
padding: 20px;
box-shadow: ${(props) => props.theme.boxShadow.primary};
border-radius: ${(props) => props.theme.borderRadius.primary};
background: ${(props) => props.theme.colors.background};
margin-top: 50px;
gap: 3%;
@media (max-width: 730px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`
