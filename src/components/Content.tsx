import React, { Fragment } from 'react';
import WebzzzContentSummary from './Summary';
import WebzzzContentOption from './OptionCard';
import WebzzzIntroduction from './Introduction';
import WebzzzContact from './Contact';
import '../components/styles.scss';
import styled from 'styled-components';

const WebzzzContent = () => {
  const Content = styled.div`
    width: 1400px;
    margin: auto;
  `;

  const CardCollection = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 40px;
    margin-top: 200px;
  `;

  const Introduction = styled.div`
    margin-top: 100px;
  `;

  const CardStaticWebsite = {
    title: 'Statisch',
    items: ['Standaard website', 'Mockup', "5 pagina's", '...', '...', 'SSL-certificaat inbegrepen'],
    price: 400,
  };

  const CardDynamicWebsite = {
    title: 'Dynamisch',
    items: ['Website met database', 'Mockup', "10 pagina's", '...', '...', 'SSL-certificaat inbegrepen'],
    price: 800,
  };

  const CardCommerceWebsite = {
    title: 'E-commerce',
    items: ['Website om te verkopen', 'Mockup', "∞ pagina's", '...', '...', 'SSL-certificaat inbegrepen'],
    price: 2000,
  };

  const CardOnlineMarketing = {
    title: 'E-commerce',
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
