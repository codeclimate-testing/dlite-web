'use strict';
import fetch                  from 'isomorphic-fetch';
require('es6-promise').polyfill();

export const buildAppName = (appName) => {
  return document.cookie = `appName=${appName};path=/`;
};

export const getAppNameCookie = () => {
  return document.cookie.replace(/(?:(?:^|.*;\s*)appName\s*\=\s*([^;]*).*$)|^.*$/, "$1");
};

export const buildLoggedIn = () => {
  return document.cookie = 'isLoggedIn=true;path=/';
};

export const buildLoggedOut = () => {
  document.cookie = 'isLoggedIn=false;path=/';
  return fetch('/apply/log-out');
};

export const getLoggedIn = () => {
  return document.cookie.replace(/(?:(?:^|.*;\s*)isLoggedIn\s*\=\s*([^;]*).*$)|^.*$/, "$1");
};

export const isLoggedIn = () => {
  let cookieValue = getLoggedIn();
  return cookieValue.toString() === 'true';
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