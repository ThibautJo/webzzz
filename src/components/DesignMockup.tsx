// Step 1: Import React
import React, { Fragment } from 'react';
import styled, { keyframes } from 'styled-components';

import mockup from '../images/mockupDesign.png';
import mockupBackground from '../images/svg/mockupBackground.svg';

const breatheAnimation = keyframes`
  0% { transform: translate(0,  0px); }
  50%  { transform: translate(0, 15px); }
  100%   { transform: translate(0, -0px); } 
  `;

const MockupDisplay = styled.img.attrs((props) => ({
  src: mockup,
  alt: 'Mockup design example',
}))`
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
    <aside>
      <div className='hidden lg:block w-auto h-auto absolute z-0 top-0 right-0'>
        <Floating>
          <MockupDisplay className='w-9/12'></MockupDisplay>
        </Floating>

        <img className='w-full h-auto block' src={mockupBackground} />
      </div>
    </aside>
  );
};

export default WebzzzAsideMockup;
