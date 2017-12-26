'use strict';

export const hasValue = (props) => {
  return !!(props && props.trim());
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
