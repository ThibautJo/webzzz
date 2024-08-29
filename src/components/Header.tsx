import React from 'react';
import logo from '../images/webzzzLogo.svg';
import WebzzzLogoBackground from '../images/svg/backgroundWebzzzLogo.svg';
import styled from 'styled-components';
import WebzzzHeaderNavigation from './Navigation';

const Logo = styled.img.attrs(() => ({
  alt: 'Webzzz logo',
  src: logo,
}))`
  width: 394.53px;
  top: 7.5%;
  left: 12%;
`;

const WebzzzHeader = () => {
  return (
    <header>
      <img src={WebzzzLogoBackground} className="hidden lg:block absolute z-20" />
      <Logo className="hidden lg:block absolute z-20"></Logo>
      <WebzzzHeaderNavigation></WebzzzHeaderNavigation>
    </header>
  );
};

export default WebzzzHeader;
