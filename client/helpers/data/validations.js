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
  return /^[\x00-\x7F]*$/.test(text);
};

export const arrayIncludes = (array, name) => {
  return array.indexOf(name) > -1;
};
