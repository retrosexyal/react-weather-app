import { useSelector } from "react-redux";
import styled, { createGlobalStyle } from "styled-components";



export const Global = createGlobalStyle<{bg:string}>`
   *{
       margin: 0;
       padding: 0;
       outline:0;
       box-sizing:border-box;
       font-family: 'Open Sans', sans-serif; 
       background: ${props=>props.bg};
   }
`;

export const theme = {
  colors: {
    primary: "#4793FF",
    secondary: "#939CB0",
    black: "#000000",
    background: "#FFFFFF",
    back:"#FFFFFF",
    blackWhite:"#000000",
    card: "rgba(71, 147, 255, 0.2)",
  },
  borderRadius: {
    primary: "20px"
  },
  boxShadow: {
    primary: "2px 5px 25px -3px rgba(180, 180, 180, 0.75)"
  }
};

export const theme2 = {
  colors: {
    primary: "#4793FF",
    secondary: "#939CB0",
    black: "#000000",
    background: "#4F4F4F",
    back:"#000000",
    blackWhite:"#FFFFFF",
    card: "#2E3035",
  },
  borderRadius: {
    primary: "20px"
  },
  boxShadow: {
    primary: "2px 5px 25px -3px rgba(120, 120, 120, 0.80)"
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
  flexWrap?: string;
  padding?: string;
}

export const StyledFlex = styled.div<StyledFlexProps>`
display: flex;
justify-content: ${props=>props.justCont || "center"};
align-items: ${props=>props.alIt || "center"};
flex-direction: ${props=>props.fD || "row"};
gap: ${props=>props.fD || "0"};
flex-wrap: ${props=>props.flexWrap || "nowrap"};
padding: ${props=>props.padding || "0"};
`
