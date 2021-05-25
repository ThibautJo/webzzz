import React from 'react';
import './styles.scss';

const WebzzzHeaderNavigationItem = ({ clickHandler, id, active, path, itemText }: any) => {
  // styles
  const listStyle = {
    fontSize: '16px',
    paddingBottom: '3px',
  };

  const anchor = {
    textDecoration: 'none',
    color: 'black',
  };

  return (
    <li style={listStyle} className={active}>
      <a href={path} style={anchor} onClick={() => clickHandler(id)} onKeyDown={() => clickHandler(id)}>
        {itemText}
      </a>
    </li>
  );
};

export default WebzzzHeaderNavigationItem;
