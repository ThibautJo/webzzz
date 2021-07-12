import * as React from 'react';
import styled from 'styled-components';
import checkIcon from '../images/check.svg';

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontSizes.large};
  font-weight: 400;
`;

const SummaryItem = styled.p`
  font-size: ${(props) => props.theme.fontSizes.small2};
  font-weight: 400;
  color: ${(props) => props.theme.colors.darkGrey};
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

const WebzzzContentSummary = () => {
  const items: string[] = ['Goedkoop', 'Responsief', 'Professioneel', 'Gratis support'];

  const SummaryItems = items.map((item, index) => {
    return (
      <SummaryItem key={index}>
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
