'use strict';
import { pageFor }          from '../navigation/page';
import { hasExistingCard }  from './card-actions';
import * as dataPresent     from '../data-present';
import {
  getDL
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
  return value === 'cdl';
};

const IDDLApp = (value) => {
  return value === 'iddl';
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

export const addOrEditFlow = (props, adding, editing) => {
  let toReturn = editing;
  if (props.hasOwnProperty('add') && props.add) {
    toReturn = adding;
  }
  else if (props.hasOwnProperty('appID')) {
    toReturn = '';
  }
  return toReturn;
};

export const addOrEdit = (props, addText, editText) => {
  return (props.hasOwnProperty('add') && props.add) ? addText : editText;
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

export function getAppType(props) {
  let appType = 'id-and-license';
  if (props.chooseApp && props.chooseApp === 'cdl') {
    appType = props.chooseApp;
  }
  else if (!props.chooseApp && props.location) {
    appType = splitPathname(props);
  }
  return appType;
}

export function getAppKey(cookieValue) {
  let pageKey = 'IDme';
  if (cdlApp(cookieValue)) {
    pageKey = 'cdlIDme';
  }
  return pageKey;
}

export function signInURL(appName) {
  return `/apply/${appName}/sign-in`;
};
