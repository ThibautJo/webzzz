// Step 1: Import React
import React, { Fragment } from 'react';
import mockup from '../images/mockupDesign.png';

const WebzzzAsideMockup = (props) => {
  // styles
  const backwardSVG = {
    position: 'absolute',
    top: '-136.85px',
    left: '1053.59px',
    zIndex: '-10',
  };

  const frontSVG = {
    position: 'absolute',
    top: '8.26px',
    left: '1114.53px',
    zIndex: '-10',
  };

  const mockupDisplay = {
    width: '535px',
    height: '321',
    position: 'absolute',
    top: '156px',
    left: '1307px',
    transform: 'scale(-1, 1)'
  };

  return (
    <Fragment>
      <img src={mockup} style={mockupDisplay} alt="mockup design example" />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style={backwardSVG}
        width="1083.447"
        height="894.688"
        viewBox="0 0 1083.447 894.688">
        <path
          id="Path_2883"
          data-name="Path 2883"
          d="M1332.886-29.778S1174.506.195,1140.985,73.674c-11.86,26,109.655,99.139,96.753,130.444-31.244,75.811-84.815,156.474-56.013,255.183,37.413,128.221,264.512,75.876,465.276,92.72,197.737,16.59,329.186,106.206,402.4,27.763,156.19-167.35-37.352-584.521-37.352-584.521L1885.566-125.908,1539.707-63.6"
          transform="matrix(0.985, 0.174, -0.174, 0.985, -1016.658, -73.993)"
          fill="rgba(242,205,19,0.63)"
        />
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        style={frontSVG}
        width="903.256"
        height="642.462"
        viewBox="0 0 903.256 642.462">
        <path
          id="Path_2882"
          data-name="Path 2882"
          d="M1335.123-4.737c-58.5,52.106-32.135,16.609-56.921,142.106-8.265,41.848-86.889,113.346-68.331,176.948,40.457,138.651,129.566,216.612,328.858,265.467,89.283,21.888,231.2,32.549,334.738,34.429,89.336,1.622,144.838-1.111,175.933-34.429,156.19-167.35-37.352-584.521-37.352-584.521S1393.623-56.842,1335.123-4.737Z"
          transform="translate(-1207.045 27.895)"
          fill="#fff"
        />
      </svg>
    </Fragment>
  );
};

export default WebzzzAsideMockup;
