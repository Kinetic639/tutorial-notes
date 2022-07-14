import React from 'react';
import {Dashboard} from './components/Dashboard/Dashboard';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {orange, teal} from '@mui/material/colors';

declare module '@mui/material/styles' {
    interface Theme {
        status: {
            danger: string;
        };
    }

    // allow configuration using `createTheme`
    interface ThemeOptions {
        status?: {
            danger?: string;
        };
    }
}

const theme = createTheme({

    status: {
        danger: orange[500],
    },
    palette: {
        primary: teal,
        secondary: {
            main: '#c5e1a5',
        },
    },
});
export const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <Dashboard/>
            </div>
        </ThemeProvider>
    );
}

