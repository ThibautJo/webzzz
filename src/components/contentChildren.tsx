import React from 'react';

// props can override these standard classes
const WebzzzContentChildren = (props: any) => {
  return <div className={`px-5 lg:px-0 m-auto lg:w-4/6 ${props.customClasses}`}>{props.children}</div>;
};

export default WebzzzContentChildren;
