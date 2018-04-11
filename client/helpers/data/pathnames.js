'use strict';
import { pageFor }          from '../navigation/page';
import { hasExistingCard }  from './card-actions';
import * as dataPresent     from '../data-present';
import { getAppNameCookie } from './cookies';
import { hasValue }         from './validations';
import { pathForPage }      from '../navigation/page';

import {
  getDL,
  getLegalNameKey
} from './card-type';
import {
  addPath,
  editPath,
  iddlPath,
  cdlPath,
  editCDLPath
} from '../alice-path';

export const getTextFromState = (props, iddlText, altText) => {
  let text = iddlText;
  if (altFlow(props)) {
    text = altText;
  }
  return text;
};


export const getActionFromState = (state) => {
  let key = state.application.cardAction;
  if (altFlow(state.ui)) {
    key = state.application.IDApp.action;
    if (getDL(state.application)) {
      key = state.application.DLApp.action;
    }
  }
  return key;
};

export const cdlApp = (value) => {
  return value.toLowerCase() === 'cdl';
};

const IDDLApp = (value) => {
  return value.toLowerCase() === 'iddl' || value.toLowerCase() === 'id-and-license';
};

export const hasChosenApp = (props) => {
  return cdlApp(props.chooseApp) || IDDLApp(props.chooseApp);
};

export const editMode = (props) => {
  let page = pageFor(props.addressName);
  let key = false;
  if (page && page.hasOwnProperty('validateFromSummary') && page.validateFromSummary) {
    key = true;
  }
  return key;
};


export const altFlow = (props) => {
  return editFlow(props) || addFlow(props);
};

export const addFlow = (props) => {
  return props.flow === 'add';
};

export const editFlow = (props) => {
  return props.flow === 'edit';
};

export const goToCardHistory = (props) => {
  return !hasExistingCard(props) && !dataPresent.licenseAndIdHistory(props.licenseAndIdHistory);
};

export function nextOrSummary(nextKey){
  return (props) => {
    if (altFlow(props)) {
      return 'summary';
    } else {
      return nextKey;
    }
  };
};

export function nextOrCDLSummary(nextKey){
  return (props) => {
    if (editFlow(props)) {
      return 'cdlSummary';
    } else {
      return nextKey;
    }
  };
};

export function applyEditOrAddPath(url){
  return (props) => {
    let urlPath = iddlPath(url);
    if (addFlow(props)) {
      urlPath = addPath(url);
    } else if (editFlow(props)) {
      urlPath = editPath(url);
    }
    return urlPath;
  };
}

export function applyOrEditCDLPath(url) {
  return (props) => {
    let urlPath = cdlPath(url);
    if (editFlow(props)) {
      urlPath = editCDLPath(url);
    }
    return urlPath;
  };
}

export function splitPathname(props) {
  return props.location.pathname.split('/')[2];
}

export function getAppKey(cookieValue) {
  let pageKey = 'IDme';
  if (cdlApp(cookieValue)) {
    pageKey = 'cdlIDme';
  }
  return pageKey;
}

export function signInURL(appName =  getAppNameCookie()) {
  if (!hasValue(appName)) {
    return '/apply';
  }
  return `/apply/${appName}/sign-in`;
}

export const goToSummary = (splitPathname) => {
  return altFlow({flow: splitPathname[3]}) || splitPathname[3] === 'appointment-preparation';
};

export const findNextPage = (pathname) => {
  // if pathname has /edit/ or /add/ or appointment-preparation page, then go to summary
  let nextAddress     = pathname;

  if (pathname) {
    let splitPathname   = pathname.split('/');
    let cardType        = splitPathname[2];

    if (goToSummary(splitPathname) && cdlApp(cardType)) {
      nextAddress = pathForPage('cdlSummary', {
        flow: ''
      });
    }
    else if (goToSummary(splitPathname) && IDDLApp(cardType)) {
      nextAddress = pathForPage('summary', {
        flow: ''
      });
    }
  }

  return nextAddress;
};