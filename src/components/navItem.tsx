import React from 'react';
import styled, { css } from 'styled-components';

const ListItem = styled.li<any>`
  font-size: 16px;
  padding-bottom: 3px;
  border-bottom: ${(props) => (props.active === true ? '3px solid #d93d04' : '3px solid transparent')};

  ${(props) =>
    props.mobile &&
    css`
      font-size: 1.5em;
      border-bottom: none;
      padding-bottom: 0px;
      text-align: center;
      background-color: ${(props) => props.theme.colors.yellow};
      padding: 10px 0px;

      &:hover {
        background-color: ${(props) => props.theme.colors.light};
      }
    `}
`;

const Anchor = styled.a`
  text-decoration: none;
  color: black;
`;

const WebzzzHeaderNavigationItem = ({ clickHandler, id, active, mobile, path, itemText }: any) => {
  return (
    <ListItem active={active} mobile={mobile}>
      <Anchor href={path} onClick={() => clickHandler(id)} onKeyDown={() => clickHandler(id)}>
        {itemText}
      </Anchor>
    </ListItem>
  );
};

export default WebzzzHeaderNavigationItem;
