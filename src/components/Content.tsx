import React, { Fragment } from 'react';
import WebzzzContentSummary from './Summary';
import WebzzzContentOption from './OptionCard';
import WebzzzIntroduction from './Introduction';
import WebzzzContact from './Contact';
import styled from 'styled-components';

import SVGFullWidthFade from '../images/svg/fullWidthFadeDown.svg';

const WebzzzContent = () => {
  const Content = styled.div`
    width: ${(props) => props.theme.breakPoints.large};
    margin: auto;
  `;

  const CardCollection = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 40px;
    margin-top: 200px;
  `;

  const Introduction = styled.div``;

  const Spacer = styled.div`
    background-color: #f2cd13;
    margin-top: -50px;
    height: 100px;

    position: absolute;
    width: 100%;
    z-index: -1;
  `;

  const SVGIntroduction = styled.img.attrs((props) => ({
    src: SVGFullWidthFade,
  }))`
    display: block;
    width: 100%;
    height: auto;

    margin-top: -150px;
    position: absolute;
    z-index: -1;
  `;

  const CardStaticWebsite = {
    title: 'Statisch',
    description: 'Een standaard website met statische content.',
    items: ['Standaard website', 'Mockup', "5 pagina's", 'SSL-certificaat inbegrepen'],
    price: 400,
  };

  const CardDynamicWebsite = {
    title: 'Dynamisch',
    description: 'Een website met up-to-date content.',
    items: ['Website met database', 'Mockup', "10 pagina's", 'SSL-certificaat inbegrepen'],
    price: 800,
  };

  const CardCommerceWebsite = {
    title: 'E-commerce',
    description: 'Een website waar goederen verkocht kan op worden.',
    items: ['Website om te verkopen', 'Mockup', "∞ pagina's", 'SSL-certificaat inbegrepen'],
    price: 2000,
  };

  const CardOnlineMarketing = {
    title: 'E-commerce',
    description: '',
    items: ['Website om te verkopen', 'Mockup', "∞ pagina's", '...', '...', 'SSL-certificaat inbegrepen'],
    price: 2000,
  };

  return (
    <Fragment>
      <Content>
        <WebzzzContentSummary></WebzzzContentSummary>

        <CardCollection>
          <WebzzzContentOption data={CardStaticWebsite}></WebzzzContentOption>
          <WebzzzContentOption data={CardDynamicWebsite}></WebzzzContentOption>
          <WebzzzContentOption data={CardCommerceWebsite}></WebzzzContentOption>
          {/* <WebzzzContentOption data={CardOnlineMarketing}></WebzzzContentOption> */}
        </CardCollection>
      </Content>

      {/* We need to implement yellow svg partly inside the card section and extend to introduction */}
      <SVGIntroduction></SVGIntroduction>
      <Spacer></Spacer>

      <Introduction>
        <WebzzzIntroduction></WebzzzIntroduction>
      </Introduction>

      <Content>
        <WebzzzContact></WebzzzContact>
      </Content>
    </Fragment>
  );
};

export default WebzzzContent;
