'use strict';
export const startsWithAdd = (pathname) => {
  return pathname.startsWith('/add/');
};

export const getTextFromPathname = (props, iddlText, addText) => {
  if (props.hasOwnProperty('location') && startsWithAdd(props.location.pathname)) {
    return addText;
  }
  return iddlText;
};
