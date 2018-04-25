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
  return props.userData.appsLength > 0;
};

export const sameType = (props) => {
  let backToDL = (props.userData.apps[0].cardType[0] === 'DL' && props.appName === 'id-and-license');
  let backToID = (props.userData.apps[0].cardType[0] === 'ID' && props.appName === 'id-and-license');
  let backToCDL = (props.userData.apps[0].cardType[0] === 'CDL' && props.appName.toLowerCase() === 'cdl');

  return backToDL || backToID || backToCDL;
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

export const getFlow = (linkType) => {
  let type = linkType.split('-');
  let flow = type[1];
  if (type[0] === 'open') {
    flow = '';
  }
  return flow;
};

export const addOrEdit = (props, addText, editText) => {
  let toReturn = editText;
  if (props.linkType.split('-')[1] === 'add') {
    toReturn = addText;
  }
  return toReturn;
};

export const addOrEditIcon = (props) => {
  return props.linkType === 'open-add' ? 'add' : 'edit';
};

export const getTimeStamp = (app) => {
  if(!hasValue(app.completedAt)) {
    return 'Open';
  }

  let completedAt = app.completedAt;

  let date = new Date(completedAt);
  let month = (date.getMonth() + 1).toString();
  let year = (date.getFullYear()).toString();
  let day = (date.getDate()).toString();
  return  `Submitted: ${month}/${day}/${year}`;
};