import React, { useState } from 'react';
import WebzzzHeaderNavigationItem from './navItem';

const WebzzzHeaderNavigation = () => {
  // styles
  const navStyle = {
    width: '100%',
    height: '60px',
    backgroundColor: 'white',
    boxShadow: '0px 2px 1px rgba(0,0,0, 0.16)',
    zIndex: 10,
  };

  const navUL = {
    listStyleType: 'none',
    margin: '0px',
    padding: '0px 316px',
    display: 'flex',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: '60px',
  };

  // state that hold active nav item
  const [activeId = 1, setActiveId] = useState<any>();

  return (
    <nav style={navStyle}>
      <ul style={navUL}>
        <WebzzzHeaderNavigationItem
          clickHandler={setActiveId}
          id={1}
          path="#contact"
          active={activeId === 1 ? true : false}
          itemText="Home"></WebzzzHeaderNavigationItem>

        <WebzzzHeaderNavigationItem
          clickHandler={setActiveId}
          id={2}
          path="#contact"
          active={activeId === 2 ? true : false}
          itemText="Wie zijn wij?"></WebzzzHeaderNavigationItem>

        <WebzzzHeaderNavigationItem
          clickHandler={setActiveId}
          id={3}
          path="#contact"
          active={activeId === 3 ? true : false}
          itemText="Wat doen wij?"></WebzzzHeaderNavigationItem>

        <WebzzzHeaderNavigationItem
          clickHandler={setActiveId}
          id={4}
          path="#contact"
          active={activeId === 4 ? true : false}
          itemText="Contacteer ons"></WebzzzHeaderNavigationItem>
      </ul>
    </nav>
  );
};

export default WebzzzHeaderNavigation;
