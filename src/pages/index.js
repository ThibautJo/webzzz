// Step 1: Import React
import * as React from 'react';
import WebzzzHeader from '../components/Header';
import WebzzzAsideMockup from '../components/DesignMockup';

// Step 2: Define your component
const IndexPage = () => {
  return (
    <main>
      <title>Webzzz | Home</title>
      <header>
        <WebzzzHeader></WebzzzHeader>
      </header>
      <aside>
        <WebzzzAsideMockup></WebzzzAsideMockup>
      </aside>
    </main>
  );
};
// Step 3: Export your component
export default IndexPage;
