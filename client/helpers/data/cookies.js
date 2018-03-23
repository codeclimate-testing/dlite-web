'use strict';

export const buildLoggedIn = () => {
  return document.cookie = 'isLoggedIn=true;path=/';
};

export const buildAppName = (value) => {
  return document.cookie = `appName=${value};path=/`;
};


export const getAppNameCookie = () => {
  return document.cookie.replace(/(?:(?:^|.*;\s*)appName\s*\=\s*([^;]*).*$)|^.*$/, "$1");
};

export const getLoggedIn = () => {
  return document.cookie.replace(/(?:(?:^|.*;\s*)isLoggedIn\s*\=\s*([^;]*).*$)|^.*$/, "$1");
};
