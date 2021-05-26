import React, { Fragment } from 'react';
import WebzzzContentSummary from './Summary';
import WebzzzContentOption from './OptionCard';
import WebzzzIntroduction from './Introduction';
import WebzzzContact from './Contact';
import '../components/styles.scss';

const WebzzzContent = () => {
  const cardsFlex = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gap: '40px',
    marginTop: '200px',
  };

  const introduction = {
    marginTop: '100px',
  };

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
      <div className="contentWidth">
        <WebzzzContentSummary></WebzzzContentSummary>

        <div style={cardsFlex}>
          <WebzzzContentOption data={CardStaticWebsite}></WebzzzContentOption>
          <WebzzzContentOption data={CardDynamicWebsite}></WebzzzContentOption>
          <WebzzzContentOption data={CardCommerceWebsite}></WebzzzContentOption>
          {/* <WebzzzContentOption data={CardOnlineMarketing}></WebzzzContentOption> */}
        </div>
      </div>

      <div style={introduction}>
        <WebzzzIntroduction></WebzzzIntroduction>
      </div>

      <div className="contentWidth">
        <WebzzzContact></WebzzzContact>
      </div>
    </Fragment>
  );
};

export default WebzzzContent;
