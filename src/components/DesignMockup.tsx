// Step 1: Import React
import React, { Fragment } from 'react';
import styled from 'styled-components';

import mockup from '../images/mockupDesign.png';
import mockupBackground from '../images/svg/mockupBackground.svg';

const WebzzzAsideMockup = (props: any) => {
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

  const MockupDisplay = styled.img.attrs((props) => ({
    src: mockup,
    alt: 'Mockup design example',
  }))`
    width: 535px;
    height: 321px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(-1, 1);
  `;

  return (
    <Fragment>
      <CenterMockupDesignContent>
        <MockupDisplay></MockupDisplay>

        <SVGMockupBackground></SVGMockupBackground>
      </CenterMockupDesignContent>
    </Fragment>
  );
};

export default WebzzzAsideMockup;
