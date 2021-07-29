import React, { Fragment, useState } from 'react';
import WebzzzHeaderNavigationItem from './navItem';
import menuOpenIcon from '../images/mobileMenu.svg';
import menuCloseIcon from '../images/closeMenu.svg';
import logo from '../images/webzzzLogo.svg';
import styled from 'styled-components';

const Nav = styled.nav`
  box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.16);
`;

const CollapseIcon = styled.img.attrs(({ collapsed }: any) => ({
  alt: 'Collapse icon',
  src: collapsed ? menuOpenIcon : menuCloseIcon,
}))<any>`
  transform: translate(0, -50%);
`;

const WebzzzHeaderNavigation = () => {
  // state that hold active nav item
  const [activeId = 1, setActiveId] = useState<any>();

  const [menuCollapsed = true, setCollapseState] = useState<any>();

  return (
    <Fragment>
      <Nav className='w-full h-14 bg-white relative z-10 lg:block'>
        <img src={logo} alt='Webzzz logo' className='absolute left-0 ml-5 p-2 h-full lg:hidden' />

        <CollapseIcon
          className='absolute top-2/4 block w-7 mr-5 right-0 lg:hidden '
          collapsed={menuCollapsed}
          onClick={() => setCollapseState(!menuCollapsed)}></CollapseIcon>

        <ul
          className={`w-full absolute m-0 mt-14 p-0 list-none flex flex-col lg:flex lg:flex-row lg:items-center lg:justify-end lg:mt-0 lg:h-full lg:pr-80 lg:gap-14
                    ${menuCollapsed === true ? 'hidden lg:block' : 'block'}`}>
          <WebzzzHeaderNavigationItem
            clickHandler={setActiveId}
            id={1}
            path='#contact'
            active={activeId === 1 ? true : false}
            itemText='Home'></WebzzzHeaderNavigationItem>

          <WebzzzHeaderNavigationItem
            clickHandler={setActiveId}
            id={2}
            path='#contact'
            active={activeId === 2 ? true : false}
            itemText='Over ons'></WebzzzHeaderNavigationItem>

          <WebzzzHeaderNavigationItem
            clickHandler={setActiveId}
            id={4}
            path='#contact'
            active={activeId === 4 ? true : false}
            itemText='Contacteer ons'></WebzzzHeaderNavigationItem>
        </ul>
      </Nav>
    </Fragment>
  );
};

export default WebzzzHeaderNavigation;
