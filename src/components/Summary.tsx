import * as React from 'react';
import styled from 'styled-components';
import checkIcon from '../images/check.svg';

const WebzzzContentSummary = () => {
  const Title = styled.h1`
    font-size: 50px;
    font-weight: 400;
  `;

  const SummaryItem = styled.p`
    font-size: 26px;
    font-weight: 400;
    color: #686868;
    display: flex;
    align-items: center;
    gap: 5px;
    margin: 5px 0px;
  `;

  const CheckIcon = styled.img.attrs((props) => ({
    alt: 'check',
    src: checkIcon,
  }))`
    width: 26px;
    transform: scale(1.5);
  `;

  const items: string[] = ['Goedkoop', 'Responsief', 'Professioneel', 'Gratis support'];

  const SummaryItems = items.map((item) => {
    return (
      <SummaryItem>
        <CheckIcon></CheckIcon> {item}
      </SummaryItem>
    );
  });

  return (
    <section>
      <Title>Laat je website maken!</Title>

      {SummaryItems}
    </section>
  );
};

export default WebzzzContentSummary;
