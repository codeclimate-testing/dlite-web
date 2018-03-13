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
};

export function applyOrEditCDLPath(url) {
  return (props) => {
    let urlPath = cdlPath(url);
    if (editFlow(props)) {
      urlPath = editCDLPath(url);
    }
    return urlPath;
  }
};
