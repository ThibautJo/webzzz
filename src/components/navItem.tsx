import React from 'react';
import styled from 'styled-components';
import './styles.scss';

const WebzzzHeaderNavigationItem = ({ clickHandler, id, active, path, itemText }: any) => {

  const ListItem = styled.li`
    font-size: 16px;
    padding-bottom: 3px;
    border-bottom: ${() => active === true ? "3px solid #d93d04" : "3px solid transparent"};
  `;

  const Anchor = styled.a`
    text-decoration: none;
    color: black;
  `;

  return (
    <ListItem>
      <Anchor href={path} onClick={() => clickHandler(id)} onKeyDown={() => clickHandler(id)}>
        {itemText}
      </Anchor>
    </ListItem>
  );
};

export default WebzzzHeaderNavigationItem;
