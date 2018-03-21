'use strict';

export const buildCookie = (stringToFind, value) => {
  if (!new RegExp(stringToFind).test(document.cookie)) {
    return document.cookie = `${stringToFind}=${value}`;
  }
};

export const getAppNameCookie = () => {
  return document.cookie.replace(/(?:(?:^|.*;\s*)appName\s*\=\s*([^;]*).*$)|^.*$/, "$1");
};

export const getLoggedIn = () => {
  return document.cookie.replace(/(?:(?:^|.*;\s*)isLoggedIn\s*\=\s*([^;]*).*$)|^.*$/, "$1");
};
