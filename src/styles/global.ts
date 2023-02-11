import styled, { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
   *{
       margin: 0;
       padding: 0;
       outline:0;
       box-sizing:border-box;
       font-family: 'Open Sans', sans-serif; 
   }
`;

export const theme = {
  colors: {
    primary: "#4793FF",
    secondary: "#939CB0",
    black: "#000000",
  },
  borderRadius: {
    primary: "20px"
  },
  boxShadow: {
    primary: "2px 5px 25px -3px rgba(180, 180, 180, 0.25)"
  }
};

export const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding-left: 50px;
  padding-right: 50px;
`;

interface StyledFlexProps {
  justCont?: string;
  alIt?: string;
  fD?: string;
  gap?: string;
}

export const StyledFlex = styled.div<StyledFlexProps>`
display: flex;
justify-content: ${props=>props.justCont || "center"};
align-items: ${props=>props.alIt || "center"};
flex-direction: ${props=>props.fD || "row"};
gap: ${props=>props.fD || "0"};
`
