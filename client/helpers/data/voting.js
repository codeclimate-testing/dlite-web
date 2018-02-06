'use strict';

import { hasValue }   from './validations';

export const eligibleForCitizen = (props) => {
  return props.citizenStatus === 'Yes';
}

export const eligibileForRequirements = (props) => {
  return props.eligibilityRequirements === 'Yes';
}

export const shouldContactMethods = (props) => {
  return props.contactMethods.shouldContact !== 'Yes';
}

export const eligibleForOptOut =  (props) => {
  return props.optOut === 'new';
}

export const eligibleForOptOutExist =  (props) => {
  return props.optOut === 'existing';
};

export const ballotByMailSelected = (props) => {
  return hasValue(props.ballotByMail);
};

export const politicalPartySelected = (props) => {
  return hasValue(props.politicalPartyChoose.isSelected);
};

export const getStringByParty = (props) => {
  let party = props.politicalPartyChoose.politicalPartyChoose;
  if (props.politicalPartyChoose.isSelected === 'Skip') {
    party = 'No answer';
  } else if(props.politicalPartyChoose.politicalPartyChoose === 'Other' && hasValue(props.politicalPartyChoose.otherParty)) {
    party = props.politicalPartyChoose.otherParty;
  }
  return party;
};

