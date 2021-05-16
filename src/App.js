// import logo from './logo.svg';
import './App.css';
import React from 'react'
import Routes from './router/Routes';
import theme from './theme/theme';
import GlobalStyled from './styles/globalStyled';
import { ThemeProvider } from 'styled-components';

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyled />
    <Routes />  
  </ThemeProvider>
) 


export default App;



