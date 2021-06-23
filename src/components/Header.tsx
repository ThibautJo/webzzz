import React, { Fragment } from 'react';
import logo from '../images/webzzzLogo.svg';
import WebzzzLogoBackground from '../images/svg/backgroundWebzzzLogo.svg';
import styled from 'styled-components';
import WebzzzHeaderNavigation from './Navigation';

const WebzzzHeader = () => {
  const SVGLogoBackground = styled.img.attrs((props) => ({
    src: WebzzzLogoBackground,
  }))`
    position: absolute;
  `;

  const Logo = styled.img.attrs((props) => ({
    alt: 'Webzzz logo',
    src: logo,
  }))`
    width: 394.53px;
    height: 134.53px;
    position: absolute;
    top: 7.5%;
    left: 12%;
  `;

  return (
    <Fragment>
      <SVGLogoBackground></SVGLogoBackground>
      <Logo></Logo>
      <WebzzzHeaderNavigation></WebzzzHeaderNavigation>
    </Fragment>
  );
};

export default WebzzzHeader;
