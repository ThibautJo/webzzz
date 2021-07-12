// Step 1: Import React
import React, { Fragment } from 'react';
import styled, { keyframes } from 'styled-components';

import mockup from '../images/mockupDesign.png';
import mockupBackground from '../images/svg/mockupBackground.svg';

const CenterMockupDesignContent = styled.div`
  width: auto;
  height: auto;
  position: absolute;
  top: 0px;
  right: 0px;
  z-index: -10;
`;

const SVGMockupBackground = styled.img.attrs((props) => ({
  src: mockupBackground,
}))`
  display: block;
  width: 100%;
  height: auto;
`;

const breatheAnimation = keyframes`
  0% { transform: translate(0,  0px); }
  50%  { transform: translate(0, 15px); }
  100%   { transform: translate(0, -0px); } 
  `;

const MockupDisplay = styled.img.attrs((props) => ({
  src: mockup,
  alt: 'Mockup design example',
}))`
  width: 535px;
  height: 321px;

  transform: translate(-50%, -50%) scale(-1, 1);
`;

const Floating = styled.div`
  animation-name: ${breatheAnimation};
  animation-duration: 4s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;

  height: 100%;
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
`;

const WebzzzAsideMockup = (props: any) => {
  return (
    <Fragment>
      <CenterMockupDesignContent>
        <Floating>
          <MockupDisplay></MockupDisplay>
        </Floating>

        <SVGMockupBackground></SVGMockupBackground>
      </CenterMockupDesignContent>
    </Fragment>
  );
};

export default WebzzzAsideMockup;
