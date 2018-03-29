'use strict';
import { pathForPage }          from '../navigation/page';
import { hasValue }             from './validations';
import { isLoggedIn }           from './cookies';


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

export const isLocal = (env = APP_ENV) => {
  return env !== 'production';
};

export function requireLogIn(pathname, env = APP_ENV){
  return (!isLocal(env) && afterIntro(pathname) && !isLoggedIn());
};