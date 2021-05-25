import * as React from 'react';
import PropTypes from 'prop-types';

interface propsCard {
  title: string;
  items: Array<string>;
  price: number;
}

const WebzzzContentOption = (props: any) => {
  const card = {
    width: 'auto',
    height: 'auto',
    padding: '10px',
    border: '5px solid #F2CD13',
    borderRadius: '25px',
    backgroundColor: 'white',
  };

  const cardTitle = {
    width: '100%',
    textAlign: 'center' as const,
    fontSize: '32px',
    fontWeight: 900,
    marginTop: '0px',
  };

  const cardSummary = {
    fontSize: '22px',
    fontWeight: 900,
    color: '#686868',
    paddingLeft: '30px',
  };

  const cardParagraph = {
    margin: '16px 0px',
  };

  const priceTag = {
    fontSize: '22px',
    fontWeight: 900,
    margin: '60px 0px',
    color: '#D96704',
    textAlign: 'center' as const,
  };

  const priceTagValue = {
    fontSize: '38px',
  };

  const cardButton = {
    width: '100%',
    height: '65px',
    borderRadius: '23px',
    backgroundColor: '#F2CD13',
    color: '#686868',
    fontSize: '24px',
    fontWeight: 900,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center' as const,
  };

  const propsObj: propsCard = props.data;

  const itemList = propsObj.items.map((item, index) => {
    return (
      <p style={cardParagraph} key={index}>
        {item}
      </p>
    );
  });

  return (
    <section>
      <div style={card}>
        <h1 style={cardTitle}>{propsObj.title}</h1>
        <div style={cardSummary}>{itemList}</div>
        <p style={priceTag}>
          VANAF <span style={priceTagValue}>€ {propsObj.price}</span>
        </p>

        <div style={cardButton}>Contacteer</div>
      </div>
    </section>
  );
};

WebzzzContentOption.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    items: PropTypes.array,
    price: PropTypes.number,
  }),
};

export default WebzzzContentOption;
