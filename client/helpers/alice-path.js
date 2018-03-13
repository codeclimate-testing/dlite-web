'use strict';

export const alicePath = (path) => {
  return `/apply${path}`;
};

export const cdlPath = (path) => {
  return alicePath(`/cdl${path}`);
};

export const iddlPath = (path) => {
  return alicePath(`/id-and-license${path}`);
};

export const editPath = (path) => {
  let editPath = `/edit${path}`;
  return `${iddlPath(editPath)}`;
};

export const addPath = (path) => {
  let addPath = `/add${path}`;
  return `${iddlPath(addPath)}`;
};

export const editCDLPath = (path) => {
  let editPath = `/edit${path}`;
  return `${cdlPath(editPath)}`;
};
