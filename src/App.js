// src/App.js
import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from './styles/theme';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import MainComponent from './components/MainComponent';
import LandingPage from './components/LandingPage';

const App = () => {


  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<LandingPage />} />
          <Route path='/home' element={<MainComponent />} />
          
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
