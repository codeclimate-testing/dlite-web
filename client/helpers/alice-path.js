'use strict';

export const alicePath = (path) => {
  return `/apply${path}`;
};

export const cdlPath = (path) => {
  return alicePath(`/cdl${path}`);
};

export const iddlPath = (path) => {
  return alicePath(`/id-and-license${path}`);
}