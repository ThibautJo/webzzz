// Step 1: Import React
import React, { Fragment } from 'react';
import mockup from '../images/mockupDesign.png';

const WebzzzAsideMockup = (props: any) => {
  // styles
  const mockupDisplay = {
    width: '535px',
    height: '321px',
    position: 'absolute' as const,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%) scale(-1, 1)',
  };

  const centerAll = {
    width: 'auto',
    height: 'auto',
    position: 'absolute' as const,
    top: '0px',
    right: '0px',
    zIndex: -10,
  };

  return (
    <Fragment>
      <div style={centerAll}>
        <img src={mockup} style={mockupDisplay} alt="mockup design example" />

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="809.144"
          height="735.115"
          viewBox="0 0 809.144 735.115">
          <g id="Group_aside" data-name="Group aside" transform="translate(-1307.174 206.688)">
            <path
              id="yellow"
              d="M1928-3V728.879s-34.757,16.446-130.484-24.811c-43.747-18.854-77.6-35.095-102.6-45.733-29.252-12.446-52.733-21.535-101.718-36.374,0,0-111.113-30.422-203.231-41.166s-185.688-38.519-223.44-68.99-48.654-77.051-29.969-150.421,78.383-131.7,86.13-149.93,9.57-37.278-21.236-73.416c-28.219-33.1-36.748-44.069-41.469-54.263a49.333,49.333,0,0,1-4.2-13.663,36.849,36.849,0,0,1,0-10.435,21.9,21.9,0,0,1,4.787-11.234,102.913,102.913,0,0,1,9.085-9.393c2.408-2.187,5.7-4.919,9.974-8.094,23.631-17.542,58.03-24.307,58.03-24.307s15.307-4.581,30-7.263,12.291-2.346,12.291-2.346Z"
              transform="translate(188.318 -203.688)"
              fill="rgba(242,205,19,0.63)"
            />
            <path
              id="white"
              d="M1928-3l-.033,629.7s-25.284,9.328-69.715,12.151-93.876,0-93.876,0-73.782-2.215-117.2-5.99-65.34-5.393-144.577-17.216-170.773-48.594-170.773-48.594-78.14-30.435-130-84.366-71.77-119.063-79.03-139.806-2.282-40.448-2.282-40.448,1.867-22.61,34.433-74.881,22.4-34.64,33.188-56.835S1201,100.187,1201,100.187s1.873-24.438,5.533-38.237,23.79-31.388,44.41-44.644,68-15.833,68-15.833,78.43-4.664,108.5-4.541S1928-3,1928-3Z"
              transform="translate(188.318 -203.618)"
              fill="#fff"
            />
          </g>
        </svg>
      </div>
    </Fragment>
  );
};

export default WebzzzAsideMockup;
