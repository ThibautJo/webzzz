import React, { Fragment } from 'react';
import logo from '../images/webzzzLogo.svg';
import WebzzzLogoBackground from '../images/svg/backgroundWebzzzLogo.svg';
import styled from 'styled-components';
import WebzzzHeaderNavigation from './Navigation';

const SVGLogoBackground = styled.img.attrs((props) => ({
  src: WebzzzLogoBackground,
}))`
  position: absolute;

  @media (max-width: ${(props) => props.theme.breakPoints.large}) {
    display: none;
  }
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

  @media (max-width: ${(props) => props.theme.breakPoints.large}) {
    display: none;
  }
`;

const WebzzzHeader = () => {
  return (
    <Fragment>
      <SVGLogoBackground></SVGLogoBackground>
      <Logo></Logo>
      <WebzzzHeaderNavigation></WebzzzHeaderNavigation>
    </Fragment>
  );
};

export default WebzzzHeader;
