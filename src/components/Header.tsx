// Step 1: Import React
import React, { Fragment } from 'react';
import logo from '../images/webzzzLogo.svg';
import WebzzzHeaderNavigation from './Navigation';

const WebzzzHeader = () => {
  // styles
  let webzzzSvg = {
    position: 'absolute' as const,
  };

  let logoStyle = {
    width: '394.53px',
    height: '134.53px',
    position: 'absolute' as const,
    top: '7.5%',
    left: ' 12%',
  };

  return (
    <Fragment>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style={webzzzSvg}
        width="982.194"
        height="316.004"
        viewBox="0 0 982.194 316.004">
        <path
          id="Path_2887"
          data-name="Path 2887"
          d="M8,313,990.194-3H8Z"
          transform="translate(-8 3.004)"
          fill="#f2cd13"
        />
      </svg>

      <img src={logo} style={logoStyle} alt="Webzzz logo" />
      <WebzzzHeaderNavigation></WebzzzHeaderNavigation>
    </Fragment>
  );
};

export default WebzzzHeader;
