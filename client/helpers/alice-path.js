'use strict';

export default (path) => {
  return `/apply/id-and-license${path}`;
};

export const cdlPath = (path) => {
  return `/apply/cdl${path}`;
};
