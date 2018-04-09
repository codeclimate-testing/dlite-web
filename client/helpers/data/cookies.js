'use strict';
import fetch                  from 'isomorphic-fetch';
require('es6-promise').polyfill();


export const buildAppName = (appName) => {
  document.cookie = `appName=${appName};path=/`;
};

export const getAppNameCookie = () => {
  return document.cookie.replace(/(?:(?:^|.*;\s*)appName\s*\=\s*([^;]*).*$)|^.*$/, "$1");
};

export const isLoggedIn = (props) => {
  return props.isLoggedIn.toString() === 'true';
};

export function getLanguageFromCookie() {
  return document.cookie.replace(/(?:(?:^|.*;\s*)language\s*\=\s*([^;]*).*$)|^.*$/, "$1");
};

export const saveLanguageCookie = (value) => {
  return document.cookie = `language=${value};path=/`;
};

export const deleteLanguageCookie = () => {
  let date = new Date();
  date.setTime(date.getTime - (24*60*60*1000));
  return document.cookie = 'language=;path=/;expires=' + date;
};