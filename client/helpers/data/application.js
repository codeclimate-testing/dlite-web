'use strict';
import { pathForPage }          from '../navigation/page';
import { hasValue }             from './validations';
import { splitPathname }        from './pathnames';

export const languageIsSelected = (value) => {
  return hasValue(value);
};

export const ballotLanguageIsSelected = (ballotLanguage) => {
  return hasValue(ballotLanguage);
};

export const buildConfCode = (props) => {
  return props.id.split('-')[0].toUpperCase().slice(0,4)+'-' + props.id.split('-')[0].toUpperCase().slice(4);
};

export const afterIntro = (pathname) => {
  let introPages = ['chooseLanguage', 'chooseApplication', 'IDme', 'cdlIDme', 'disclaimers', 'cdlDisclaimers', 'links'];
  for(var i = 0; i < introPages.length; i++) {
    if(pathForPage(introPages[i]) === pathname) {
      return false;
    }
  }
  return true;
};

export const isProduction = (env = APP_ENV) => {
  return env !== 'test' && env !== 'development';
};

export function requireLogIn(pathname, isLoggedIn, env = APP_ENV){
  console.log('check to see if user is logged on: ' + isLoggedIn);
  return (isProduction(env) && !isLoggedIn && afterIntro(pathname));
};


export const hasMultipleApps = (props) => {
  return props.userData.appsLength > 1;
}

export const parseAppName = (props) => {
  let appName;
  if (props.chooseApp === 'id-and-license' || props.chooseApp.toLowerCase() === 'cdl') {
    appName = props.chooseApp;
  }
  else {
    appName = splitPathname(props);
  }
  return appName;
};
