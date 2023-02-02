import React from 'react';
import { MainCard } from './components/main-card';
import { Header } from './containers/header';
import { Main } from './containers/main';
import { Wrapper } from './styles/global';

function App() {
  return (
    <Wrapper>
        <Header/>
        <Main/>
    </Wrapper>
  );
}

export default App;
