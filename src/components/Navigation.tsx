import React, { Fragment, useState } from 'react';
import WebzzzHeaderNavigationItem from './navItem';
import menuOpenIcon from '../images/mobileMenu.svg';
import menuCloseIcon from '../images/closeMenu.svg';

import styled, { css } from 'styled-components';

const Nav = styled.nav`
  width: 100%;
  height: 60px;
  background-color: white;
  box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.16);
  z-index: 10;

  @media (max-width: ${(props) => props.theme.breakPoints.large}) {
    display: flex;
    justify-content: flex-end;
  }
`;

const UL = styled.ul`
  @media (min-width: ${(props) => props.theme.breakPoints.large}) {
    list-style-type: none;
    margin: 0px;
    padding: 0px 316px;
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: flex-end;
    gap: 60px;
  }

  @media (max-width: ${(props) => props.theme.breakPoints.large}) {
    display: none;
  }
`;

const ULMobile = styled.ul<any>`
  @media (min-width: ${(props) => props.theme.breakPoints.large}) {
    display: none;
  }

  @media (max-width: ${(props) => props.theme.breakPoints.large}) {
    margin: 0px;
    padding: 0px;
    list-style-type: none;
    display: flex;
    flex-direction: column;

    ${(props) =>
      props.collapsed &&
      css`
        display: none;
      `}
  }
`;

const MobileMenuOpenButton = styled.img.attrs(({ collapsed }: any) => ({
  src: collapsed ? menuOpenIcon : menuCloseIcon,
}))<any>`
  width: 28px;
  margin-right: 20px;

  @media (min-width: ${(props) => props.theme.breakPoints.large}) {
    display: none;
  }
`;

const WebzzzHeaderNavigation = () => {
  // state that hold active nav item
  const [activeId = 1, setActiveId] = useState<any>();

  const [menuCollapsed = true, setCollapseState] = useState<any>();

  return (
    <Fragment>
      <Nav>
        <MobileMenuOpenButton
          onClick={() => setCollapseState(!menuCollapsed)}
          collapsed={menuCollapsed}></MobileMenuOpenButton>
        <UL>
          <WebzzzHeaderNavigationItem
            clickHandler={setActiveId}
            id={1}
            path="#contact"
            active={activeId === 1 ? true : false}
            mobile={false}
            itemText="Home"></WebzzzHeaderNavigationItem>

          <WebzzzHeaderNavigationItem
            clickHandler={setActiveId}
            id={2}
            path="#contact"
            active={activeId === 2 ? true : false}
            mobile={false}
            itemText="Over ons"></WebzzzHeaderNavigationItem>

          <WebzzzHeaderNavigationItem
            clickHandler={setActiveId}
            id={4}
            path="#contact"
            active={activeId === 4 ? true : false}
            mobile={false}
            itemText="Contacteer ons"></WebzzzHeaderNavigationItem>
        </UL>
      </Nav>

      <ULMobile collapsed={menuCollapsed}>
        <WebzzzHeaderNavigationItem
          clickHandler={setActiveId}
          id={1}
          path="#contact"
          active={activeId === 1 ? true : false}
          mobile={true}
          itemText="Home"></WebzzzHeaderNavigationItem>

        <WebzzzHeaderNavigationItem
          clickHandler={setActiveId}
          id={2}
          path="#contact"
          active={activeId === 2 ? true : false}
          mobile={true}
          itemText="Over ons"></WebzzzHeaderNavigationItem>

        <WebzzzHeaderNavigationItem
          clickHandler={setActiveId}
          id={4}
          path="#contact"
          active={activeId === 4 ? true : false}
          mobile={true}
          itemText="Contacteer ons"></WebzzzHeaderNavigationItem>
      </ULMobile>
    </Fragment>
  );
};

export default WebzzzHeaderNavigation;
