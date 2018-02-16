'use strict';
export const startsWithAdd = (pathname) => {
  return pathname.startsWith('/add/');
};

export const onIDFlow = (pathname) => {
  return pathname.startsWith('/add/id-card');
};

export const getTextFromPathname = (props, iddlText, addDLText, addIDText) => {
  if (props.hasOwnProperty('location')){
    if (onIDFlow(props.location.pathname)) {
      return addIDText;
    }
    else if (startsWithAdd(props.location.pathname)) {
      return addDLText;
    }
  }
  return iddlText;
};

export const setKeyFromPathname = (props) => {
  if (props.hasOwnProperty('location') && startsWithAdd(props.location.pathname)) {
    return splitPathname(props.location.pathname);
  } else {
    return props.sectionKey;
  }
};

export const splitPathname = (pathname) => {
  return pathname.split('/')[2];
};

export const addingApp = (value) => {
  return driverLicense(value) || value === 'id-card';
};

export const driverLicense = (value) => {
  return value === 'driver-license';
};

export const changeFlow = (value) => {
  return driverLicense(value);
};