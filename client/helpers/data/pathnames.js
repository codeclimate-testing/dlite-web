'use strict';


export const onIDFlow = (props) => {
  return props.location.pathname.startsWith('/add/id-card');
};

export const ifSecondFlow = (props, iddlText, addText) => {
  if (addingApp(props.addApp)) {
    return addText;
  }
  return iddlText;
};

export const setKeyFromPathname = (props) => {
  if (props.hasOwnProperty('location') && startsWithAdd(props.location.pathname)) {
    return splitPathname(props.location.pathname);
  } else {
    return props.sectionKey;
  }
export const getTextFromPathname = (props, initialFlow, addDLFlow, addIDFlow) => {
  let value = splitPathname(props.location.pathname);
  if (driverLicense(value)) {
    return addDLFlow;
  } else if (idCard(value)) {
    return addIDFlow;
  }
  return initialFlow;
};

export const splitPathname = (pathname) => {
  return pathname.split('/')[2];
};

export const addingApp = (value) => {
  return driverLicense(value) || idCard(value);
};

export const driverLicense = (value) => {
  return value === 'driver-license';
};

export const idCard = (value) => {
  return value === 'id-card';
};
