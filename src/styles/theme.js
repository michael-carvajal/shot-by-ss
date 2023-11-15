// src/styles/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#1a1a1a', // Dark primary color
        },
        secondary: {
            main: '#757575', // Adjust the secondary color to your preference
        },
        text: {
            primary: '#ffffff', // White text
            secondary: '#bdbdbd', // Light gray text
        },
        background: {
            default: '#121212', // Dark background color
            paper: '#212121', // Slightly lighter background for paper-like elements
        },
    },
    typography: {
        fontFamily: 'Roboto, sans-serif',
    },
    shape: {
        borderRadius: 8,
    },
    overrides: {
        MuiButton: {
            root: {
                textTransform: 'none', // Remove uppercase from buttons
                borderRadius: 8,
            },
        },
    },
});

export default theme;

