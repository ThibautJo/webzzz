import React, { Fragment } from 'react';
import WebzzzContentSummary from './Summary';
import WebzzzContentOption from './OptionCard';
import WebzzzIntroduction from './Introduction';
import WebzzzContact from './Contact';
import styled from 'styled-components';

import SVGFullWidthFade from '../images/svg/fullWidthFadeDown.svg';
import WebzzzContentChildren from './contentChildren';

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

const WebzzzContent = () => {
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

  const summaryItems: string[] = ['Goedkoop', 'Responsief', 'Professioneel', 'Gratis support'];

  return (
    <div className='mt-60 h-auto'>
      <WebzzzContentChildren>
        <WebzzzContentSummary items={summaryItems}></WebzzzContentSummary>
      </WebzzzContentChildren>

      <WebzzzContentChildren customClasses='grid grid-cols-1 gap-10 mt-24 lg:grid-cols-3 lg:mt-48'>
        <WebzzzContentOption data={CardStaticWebsite}></WebzzzContentOption>
        <WebzzzContentOption data={CardDynamicWebsite}></WebzzzContentOption>
        <WebzzzContentOption data={CardCommerceWebsite}></WebzzzContentOption>
      </WebzzzContentChildren>

      {/* We need to implement yellow svg partly inside the card section and extend to introduction */}
      <WebzzzContentChildren customClasses='w-full lg:w-full'>
        <SVGIntroduction></SVGIntroduction>
        <Spacer></Spacer>
        <WebzzzIntroduction></WebzzzIntroduction>
      </WebzzzContentChildren>

      <WebzzzContentChildren>
        <WebzzzContact></WebzzzContact>
      </WebzzzContentChildren>
    </div>
  );
};

export default WebzzzContent;
