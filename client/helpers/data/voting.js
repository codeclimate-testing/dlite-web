'use strict';

import { hasValue }   from './validations';

export const eligibleForCitizen = (props) => {
  return props.citizenStatus === 'Yes';
};

export const citizenStatusNotChosen = (props) => {
  return !hasValue(props.citizenStatus);
};

export const eligibilityNotChosen = (props) => {
  return !hasValue(props.eligibilityRequirements);
};

export const declineToAnswer = (value) => {
  return value === 'decline';
};

export const eligibilityRequirementsYes = (props) => {
  return props.eligibilityRequirements === 'Yes';
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

export const ballotByMail = (props) => {
  return props.ballotByMail === 'Yes'
}

export const optOutSelected = (props) => {
  return hasValue(props.optOut);
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

export const skipParty = (props) => {
  return props.politicalPartyChoose.isSelected === 'Skip';
}

export const americanIndependentParty = (props) => {
  return props.politicalPartyChoose.politicalPartyChoose === 'American Independent Party'
}

export const democraticParty = (props) => {
  return props.politicalPartyChoose.politicalPartyChoose === 'Democratic Party'
}

export const greenParty = (props) => {
  return props.politicalPartyChoose.politicalPartyChoose === 'Green Party'
}

export const libertarianParty = (props) => {
  return props.politicalPartyChoose.politicalPartyChoose === 'Libertarian Party'
}

export const peaceAndFreedomParty = (props) => {
  return props.politicalPartyChoose.politicalPartyChoose === 'Peace and Freedom Party'
}

export const republicanParty = (props) => {
  return props.politicalPartyChoose.politicalPartyChoose === 'Republican Party'
}

export const otherParty = (props) => {
  return hasValue(props.politicalPartyChoose.otherParty)
}

