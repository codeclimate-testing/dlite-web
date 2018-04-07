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
  return (isProduction(env) && !isLoggedIn && afterIntro(pathname));
};


export const hasMultipleApps = (props) => {
  return props.userData.appsLength > 1;
}

export const parseAppName = (props) => {
  let appName = props.chooseApp.toLowerCase();
  if (!hasValue(props.chooseApp)) {
    appName = splitPathname(props);
  }
  else if (props.chooseApp === 'iddl') {
    appName = 'id-and-license';
  }
  return appName;
};

export const parseChooseApp = (appName) => {
  let chooseApp = appName;
  if (appName === 'id-and-license') {
    chooseApp = 'iddl';
  }
  return chooseApp;
};
