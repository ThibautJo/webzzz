import * as React from 'react';
import styled from 'styled-components';

interface propsCard {
  title: string;
  description: string;
  items: Array<string>;
  price: number;
}

/**
 * box shadows
 */

//  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
// box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
// box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;

const Box = styled.div`
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`;

const BoxHeader = styled.div`
  border-bottom: 1px solid rgba(27, 31, 35, 0.15);
`;

const WebzzzContentOption = (props: any) => {
  const { title, description, items, price }: propsCard = props.data;

  const itemList = items.map((item, index) => {
    return (
      <p key={index} className='text-base text-lightGrey'>
        {item}
      </p>
    );
  });

  return (
    <Box className='bg-white min-h-400px relative'>
      <BoxHeader className='p-5 h-24 max-h-24'>
        <h1 className='text-smallMedium m-0'> {title} </h1>
        <p className='text-sm mb-0'>{description}</p>
      </BoxHeader>
      <div className='px-5 py-2.5'>{itemList}</div>
      <div className='p-5 text-right absolute bottom-0 right-0'>
        <p className='text-smallMedium mb-2.5'>€ 400.00</p>

        <button className='bg-yellow text-black text-xl border-0 rounded-3xl cursor-pointer py-1.5	px-2.5'>
          Contacteer
        </button>
      </div>
    </Box>
  );
};

export default WebzzzContentOption;
