import React, { Fragment } from 'react';
import './styles.scss';

const WebzzzIntroduction = (props: any) => {
  const svgStyle = {
    display: 'block',
    width: '100%',
    height: 'auto',
  };

  const box = {
    width: '100%',
    backgroundColor: '#F2CD13',
  };

  const contentBox = {
    padding: '20px 0px',
  };

  const introTitleBorder = {
    width: '160px',
    height: '5px',
    backgroundColor: '#D93D04',
  };

  const introTitle = {
    margin: '0px',
    fontSize: '50px',
    fontWeight: 400,
    paddingBtoom: '13px',
  };

  return (
    <Fragment>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style={svgStyle}
        width="1919.871"
        height="119.772"
        viewBox="0 0 1919.871 119.772">
        <path
          id="Path_2884"
          data-name="Path 2884"
          d="M1921.155,1552.9,1.284,1452.841v119.772H1921.155Z"
          transform="translate(-1.284 -1452.841)"
          fill="#f2cd13"
        />
      </svg>
      <section style={box}>
        <div className="contentWidth" style={contentBox}>
          <h1 style={introTitle}>Wie zien wij?</h1>
          <div style={introTitleBorder}></div>

          <div>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
              et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
              aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
              gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
              sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
              takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
              sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero
              eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
              Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
              eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
              et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
              sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
              ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et
              ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
              dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
              magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
              clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
              consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
              gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
              sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
              takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur…
            </p>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default WebzzzIntroduction;
