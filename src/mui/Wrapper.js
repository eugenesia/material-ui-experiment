import React from 'react';
import { createMuiTheme, colors, ThemeProvider, CssBaseline, Container } from '@material-ui/core';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: colors.red.A400,
    },
    background: {
      default: '#fff',
    },
  },
});

export default function Wrapper({ children }) {
  return (
    <ThemeProvider theme={theme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <Container maxWidth="sm">
        <div style={{ marginTop: 24, }}>
          { children }
        </div>
      </Container>
    </ThemeProvider>
  );
}
