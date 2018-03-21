'use strict';
import { pathForPage }          from '../navigation/page';

export const buildLoggedIn = () => {
  return document.cookie = 'isLoggedIn=true;path=/';
};

export const buildAppName = (value) => {
  return document.cookie = `appName=${value};path=/`;
};


export const getAppNameCookie = () => {
  return document.cookie.replace(/(?:(?:^|.*;\s*)appName\s*\=\s*([^;]*).*$)|^.*$/, "$1");
};

export const isLoggedIn = (props) => {
  let cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)isLoggedIn\s*\=\s*([^;]*).*$)|^.*$/, "$1");
  return (cookieValue && cookieValue.toString() === 'true');
};

export const isProduction =   APP_ENV !== 'development' &&
                              APP_ENV !== 'test' &&
                              APP_ENV !== 'acceptance';

export const afterIntro = (props) => {
  let pathname = props.location.pathname;
  let introPages = ['chooseLanguage', 'chooseApplication'];
  for(var i = 0; i < introPages.length; i++) {
    if(pathForPage(introPages[i]) === pathname) {
      return false;
    }
  }
  return true;
};

export function requireLogIn(props){
  return (isProduction && afterIntro(props) && !isLoggedIn(props));
};
