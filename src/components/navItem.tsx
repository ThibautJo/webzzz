import React from 'react';

const WebzzzHeaderNavigationItem = ({ clickHandler, id, active, path, itemText }: any) => {
  // uses template string in className (using this to have a conditional class assignment)
  return (
    <li
      className={`text-smallMedium pb-0 border-b-0 px-0 py-2.5 text-center bg-yellow hover:bg-light
                lg:text-base lg:bg-white lg:pb-0.5 lg:hover:bg-white 
                ${active === true ? 'border-b-2 border-red' : 'border-b-2 border-transparent'}`}>
      <a
        href={path}
        onClick={() => clickHandler(id)}
        onKeyDown={() => clickHandler(id)}
        className="no-underline text-black">
        {itemText}
      </a>
    </li>
  );
};

export default WebzzzHeaderNavigationItem;
