import React from 'react';
import { ThemeProvider } from './ThemeContext';
import Page from './components/Page';

const App = () => {
  return (
    <ThemeProvider>
        <Page />
    </ThemeProvider>
  );
};

export default App;
