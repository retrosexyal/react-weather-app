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
    secondary: "red",
  },
};

export const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;
