// Step 1: Import React
import * as React from 'react';
import WebzzzHeader from '../components/Header';
import WebzzzAsideMockup from '../components/DesignMockup';
import WebzzzContent from '../components/Content';
import WebzzzFooter from '../components/footer';

// Step 2: Define your component
const IndexPage = () => {

  return (
    <main>
        <title>Webzzz | Home</title>
        <WebzzzHeader></WebzzzHeader>
        <WebzzzAsideMockup></WebzzzAsideMockup>
        <WebzzzContent></WebzzzContent>
        <WebzzzFooter></WebzzzFooter>
      </main>
  );
};
// Step 3: Export your component
export default IndexPage;
