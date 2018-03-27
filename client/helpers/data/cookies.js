'use strict';
import { pathForPage }          from '../navigation/page';

export const buildAppName = (appName) => {
  return document.cookie = `appName=${appName};path=/`;
};

export const getAppNameCookie = () => {
  return document.cookie.replace(/(?:(?:^|.*;\s*)appName\s*\=\s*([^;]*).*$)|^.*$/, "$1");
};

export const buildLoggedIn = () => {
  return document.cookie = 'isLoggedIn=true;path=/';
};

export const getLoggedIn = () => {
  return document.cookie.replace(/(?:(?:^|.*;\s*)isLoggedIn\s*\=\s*([^;]*).*$)|^.*$/, "$1");
};

export const isLoggedIn = () => {
  let cookieValue = getLoggedIn();
  return cookieValue.toString() === 'true';
};

export const isProduction = (env = APP_ENV) => {
  return  env !== 'development' &&
          env !== 'test' &&
          env !== 'acceptance';
};

export const afterIntro = (pathname) => {
  let introPages = ['chooseLanguage', 'chooseApplication'];
  for(var i = 0; i < introPages.length; i++) {
    if(pathForPage(introPages[i]) === pathname) {
      return false;
    }
  }
  return true;
};

export function requireLogIn(props, env = APP_ENV){
  return (isProduction(env) && afterIntro(props.location.pathname) && !isLoggedIn());
};
export function getLanguageFromCookie() {
  return document.cookie.replace(/(?:(?:^|.*;\s*)language\s*\=\s*([^;]*).*$)|^.*$/, "$1");
}

export const saveLanguageCookie = (value) => {
  return document.cookie = `language=${value};path=/`;
};
