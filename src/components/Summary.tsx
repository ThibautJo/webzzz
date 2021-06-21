import * as React from 'react';
import styled from 'styled-components';
import checkIcon from '../images/check.svg';

const WebzzzContentSummary = () => {

  const Title = styled.h1`
    font-size: 50px;
    font-weight: 400;
    `;

  const summaryItem = {
    fontSize: '26px',
    fontWeight: 400,
    color: '#686868',
    display: 'flex',
    alignItems: 'center' as const,
    gap: '5px',
    margin: '5px 0px',
  };

  const summaryIcon = {
    width: '26px',
    transform: 'scale(1.5)',
  };

  return (
    <section>
      <Title>Laat je website maken!</Title>
      <div>
        <p style={summaryItem}>
          <img src={checkIcon} alt="check" style={summaryIcon} /> Goedkoop
        </p>
        <p style={summaryItem}>
          <img src={checkIcon} alt="check" style={summaryIcon} /> Responsief
        </p>
        <p style={summaryItem}>
          <img src={checkIcon} alt="check" style={summaryIcon} /> Professioneel
        </p>
        <p style={summaryItem}>
          <img src={checkIcon} alt="check" style={summaryIcon} /> Gratis support
        </p>
      </div>
    </section>
  );
};

export default WebzzzContentSummary;
