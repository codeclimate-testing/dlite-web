'use strict';

export const hasValue = (props) => {
  if(typeof props === 'boolean') {
    return props;
  }
  return !!(props &&  (typeof(props) === 'string' ? props.trim() : props.length > 0));
};

export const hasAllAttributes = (props, attributes) => {
  if (!props) { return; }
  return attributes.every((attributeName) => {
    return hasValue(props[attributeName]);
  });
};

export const hasAnyAttributes = (props, attributes) => {
  if (!props) { return; }

  return attributes.some((attributeName) => {
    return hasValue(props[attributeName]);
  });
};

export const hasOnlyEnglishChars = (text) => {
  return /^[0-9a-zA-Z-,. _]*$/.test(text);
};

export const hasOnlyNumbers = (text) => {
  return /^[0-9]*$/.test(text);
};

export const emailRegex = (value) => {
  let reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
  return reg.test(value.toLowerCase());
};

export const emailHasOnlyEnglishChars = (text) => {
  return /^[\x00-\x7F]*$/.test(text);
}

export const isYes = (value) => {
  return value === 'Yes';
};

export const isNo = (value) => {
  return value === 'No';
};
