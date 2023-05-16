import React, { useState } from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';

const App = () => {
  const [themeMode, setThemeMode] = useState('light');

  const theme = createMuiTheme({
    palette: {
      type: themeMode,
      primary: {
        main: '#1976d2',
      },
      secondary: {
        main: '#dc004e',
      },
    },
  });

  const handleThemeToggle = () => {
    setThemeMode(themeMode === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>
        <Button variant="contained" color="primary" onClick={handleThemeToggle}>
          {themeMode === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
        </Button>
        {/* the rest of your component */}
      </div>
    </ThemeProvider>
  );
};

export default App;
