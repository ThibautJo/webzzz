import * as React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

interface propsCard {
  title: string;
  description: string;
  items: Array<string>;
  price: number;
}

const WebzzzContentOption = (props: any) => {
  /**
   * box shadows
   */

  //  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  // box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  // box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;

  const Box = styled.div`
    min-height: 400px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    background-color: white;
  `;

  const BoxHeader = styled.div`
    border-bottom: 1px solid rgba(27, 31, 35, 0.15);
    padding: 20px;
  `;

  const BoxBody = styled.div`
    padding: 10px 20px;
  `;

  const BodyFooter = styled.div`
    padding: 10px 20px 30px 20px;
    text-align: right;

    .priceDisplay {
      font-size: 28px;
      margin-bottom: 10px;
    }
  `;

  const ContactButton = styled.button`
    background-color: #f2cd13;
    color: black;
    font-size: 20px;
    border: none;
    border-radius: 24px;
    padding: 5px 10px;
    cursor: pointer;
  `;

  const Title = styled.h1`
    font-size: 26px;
    margin: 0px;
  `;

  const Description = styled.p`
    font-size: 13px;
    margin-bottom: 0px;
  `;

  const CardSummaryItem = styled.p`
    font-size: 15px;
    color: rgba(39, 40, 44, 0.7);
  `;

  const { title, description, items, price }: propsCard = props.data;

  const itemList = items.map((item, index) => {
    return <CardSummaryItem key={index}>{item}</CardSummaryItem>;
  });

  return (
    <Box>
      <BoxHeader>
        <Title> {title} </Title>
        <Description>{description}</Description>
      </BoxHeader>
      <BoxBody>{itemList}</BoxBody>
      <BodyFooter>
        <p className="priceDisplay">€ 400.00</p>

        <ContactButton>Contacteer</ContactButton>
      </BodyFooter>
    </Box>
  );
};

WebzzzContentOption.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    items: PropTypes.array,
    price: PropTypes.number,
  }),
};

export default WebzzzContentOption;
