// Step 1: Import React
import * as React from 'react';
import { ThemeProvider } from 'styled-components';

import WebzzzHeader from '../components/Header';
import WebzzzAsideMockup from '../components/DesignMockup';
import WebzzzContent from '../components/Content';
import WebzzzFooter from '../components/footer';

// Step 2: Define your component
const IndexPage = () => {
  const content = {
    height: 'auto',
    margin: 'auto',
    marginTop: '250px',
  };

  const theme = {
    fonts: ['sans-serif', 'Roboto'],
    fontSizes: {
      small: '1em',
      medium: '2em',
      large: '3em',
    },
    colors: {
      light: '#F2DA91',
      darkLight: '#F29F05',
      orange: '#D96704',
      lightRed: '#BF4804',
      red: '#D93D04',
      white: 'white',
      black: 'black',
      lightGrey: '#868e96',
    },
    breakPoints: {
      large: '1170px',
      medium: '768px',
      small: '450px',
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <main>
        <title>Webzzz | Home</title>
        <header>
          <WebzzzHeader></WebzzzHeader>
        </header>
        <aside>
          <WebzzzAsideMockup></WebzzzAsideMockup>
        </aside>
        <div style={content}>
          <WebzzzContent></WebzzzContent>
        </div>
        <footer>
          <WebzzzFooter></WebzzzFooter>
        </footer>
      </main>
    </ThemeProvider>
  );
};
// Step 3: Export your component
export default IndexPage;
