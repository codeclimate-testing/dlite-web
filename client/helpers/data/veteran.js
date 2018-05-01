'use strict';

import { hasValue }           from '../data/validations';
import {
  hasExistingCard,
  isRenewingCard,
  isGettingNew
 }    from './card-actions'
 import { getDL }             from './card-type';

export const isVeteran = (props) => {
  return props.veteransService.isVeteran === 'Yes'
};

export const receiveBenefits = (props) => {
  return props.veteransService.receiveBenefits === 'Yes'
};

export const veteransIdentifier = (props) => {
  return props.veteransService.veteransIdentifier === 'Yes'
};

export const mustChooseIdentifier = (props) => {
  return isVeteran(props) && !isRenewingCard(props)
};

export const mustChooseKeepVeteranIdentifier = (props) => {
  return showPreviousDesignationPage(props) && isPreviouslyDesignated(props)
};

export const mustChooseAddVeteranIdentifier = (props) => {
  return showPreviousDesignationPage(props) && props.veteransService.previouslyDesignated === 'No'
};

export const showPreviousDesignationPage = (props) => {
  return isVeteran(props) && !isGettingNew(props);
};

export const showIdentifierPage = (props) => {
  let preDesignation = hasValue(props.veteransService.previouslyDesignated);
  return isVeteran(props) && (isGettingNew(props)|| preDesignation);
};

export const isPreviouslyDesignated = (props) => {
  return props.veteransService.previouslyDesignated === 'Yes';
};

export const showIdentifierMessage = (props) => {
  return props.veteransService.veteransIdentifier === 'Yes';
};

export const showBulletPoint = (props) => {
  return showIdentifierMessage(props) && isVeteran(props);
};

export const removeIdentifierNotification = (props) => {
  return isPreviouslyDesignated(props) && props.veteransService.veteransIdentifier === 'No';
};

export const showPreviousIDHeader = (props) => {
  return isPreviouslyDesignated(props) && !getDL(props);
};

export const showPreviousDLHeader = (props) => {
  return isPreviouslyDesignated(props) && getDL(props);
};

export const showNewIDHeader = (props) => {
  return !isPreviouslyDesignated(props) && !getDL(props);
};

export const showNewDLHeader = (props) => {
  return !isPreviouslyDesignated(props) && getDL(props);
};

export const keepOrAdd = (props) => {
  return isPreviouslyDesignated(props) ? 'previous' : 'new';
};
