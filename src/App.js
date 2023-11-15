// src/App.js
import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from './styles/theme';
import Button from '@mui/material/Button';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        {/* Your components go here */}
        <Button variant="contained" color="primary">
          Click me
        </Button>
      </div>
    </ThemeProvider>
  );
};

export default App;
