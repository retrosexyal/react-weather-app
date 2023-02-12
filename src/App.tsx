import React from "react";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";

import { Header } from "./containers/header";
import { Main } from "./containers/main";
import { RootState } from "./redux/store";
import { Global, Wrapper } from "./styles/global";

function App() {
  const theme = useSelector((state: RootState) => state.theme.theme);
  return (
    <div>
      <Global bg={theme.colors.back} />
      <ThemeProvider theme={theme}>
        <Wrapper>
          <Header />
          <Main />
        </Wrapper>
      </ThemeProvider>
    </div>
  );
}

export default App;
