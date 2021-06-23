import React, { useState } from 'react';
import WebzzzHeaderNavigationItem from './navItem';
import styled from 'styled-components';

const WebzzzHeaderNavigation = () => {
  // styles
  const Nav = styled.nav`
    width: 100%;
    height: 60px;
    background-color: white;
    box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.16);
    z-index: 10;
  `;

  const UL = styled.ul`
    list-style-type: none;
    margin: 0px;
    padding: 0px 316px;
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: flex-end;
    gap: 60px;
  `;

  // state that hold active nav item
  const [activeId = 1, setActiveId] = useState<any>();

  return (
    <Nav>
      <UL>
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
      </UL>
    </Nav>
  );
};

export default WebzzzHeaderNavigation;
