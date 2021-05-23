// Step 1: Import React
import React, { Fragment } from 'react';
import logo from '../images/webzzzLogo.svg';
import WebzzzHeaderNavigation from './Navigation';

const WebzzzHeader = () => {
  // styles
  let parent = {
    width: '100%',
    height: '467.36px',
    position: 'absolute',
    top: '-375.48px',
    left: '-375.48px',
    backgroundColor: '#F2CD13',
    transform: 'rotate(-18deg)',
  };

  let logoStyle = {
    width: '394.53px',
    height: '134.53px',
    position: 'absolute',
    top: '69.84px',
    left: '239px',
  };

  return (
    <Fragment>
      <div style={parent}></div>
      <img src={logo} style={logoStyle} alt="Webzzz logo" />
      <WebzzzHeaderNavigation></WebzzzHeaderNavigation>
    </Fragment>
  );
};

export default WebzzzHeader;
