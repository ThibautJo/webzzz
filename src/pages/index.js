// Step 1: Import React
import * as React from 'react';
import WebzzzHeader from '../components/Header';
import WebzzzAsideMockup from '../components/DesignMockup';
import WebzzzContent from '../components/Content';
import WebzzzFooter from '../components/footer'

// Step 2: Define your component
const IndexPage = () => {
  const content = {
    height: 'auto',
    margin: 'auto',
    marginTop: '250px',
  };

  return (
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
  );
};
// Step 3: Export your component
export default IndexPage;
