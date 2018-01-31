'use strict';

import { hasValue }           from '../data/validations';
import {
  hasExistingCard,
  isGettingNew,
  isCardActionSelected
 }    from './card-actions'
 import { getDL }             from './card-type';

export const isVeteran = (props) => {
  return props.veteransService.isVeteran === 'Yes'
};

export const mustChoosePreviousDesignation = (props) => {
  return isVeteran(props) && hasExistingCard(props)
};

export const mustChooseIdentifier = (props) => {
  return isVeteran(props) && !hasExistingCard(props)
};

export const mustChooseKeepVeteranIdentifier = (props) => {
  return isVeteran(props) && hasExistingCard(props) && isPreviouslyDesignated(props)
};

export const mustChooseAddVeteranIdentifier = (props) => {
  return isVeteran(props) && hasExistingCard(props) && props.veteransService.previouslyDesignated === 'No'
};

export const showPreviousDesignationPage = (props) => {
  return isVeteran(props) && isCardActionSelected(props) &&  !isGettingNew(props) ;
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