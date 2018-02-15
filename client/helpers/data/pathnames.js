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

export const setKeyFromPathname = (props) => {
  if (props.hasOwnProperty('location') && startsWithAdd(props.location.pathname)) {
    let pathname = props.location.pathname.split('/');
    return pathname[2];
  } else {
    return props.sectionKey;
  }
};

export const addingApp = (value) => {
  return driverLicense(value) || value === 'id-card';
};

export const driverLicense = (value) => {
  return value === 'driver-license';
};