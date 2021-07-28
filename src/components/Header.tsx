import React, { Fragment } from 'react';
import logo from '../images/webzzzLogo.svg';
import WebzzzLogoBackground from '../images/svg/backgroundWebzzzLogo.svg';
import styled from 'styled-components';
import WebzzzHeaderNavigation from './Navigation';

const Logo = styled.img.attrs(() => ({
  alt: 'Webzzz logo',
  src: logo,
}))`
  width: 394.53px;
  height: 134.53px;
  top: 7.5%;
  left: 12%;
`;

const WebzzzHeader = () => {
  return (
    <Fragment>
      <img src={WebzzzLogoBackground} className="hidden md:block absolute z-20" />
      <Logo className="hidden md:block absolute z-20"></Logo>
      <WebzzzHeaderNavigation></WebzzzHeaderNavigation>
    </Fragment>
  );
};

export default WebzzzHeader;
