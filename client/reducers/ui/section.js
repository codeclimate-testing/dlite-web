'use strict';

import { TYPES } from '../../actions';

//-------
// This should go into someplace that is easily internationalized!
const intro = {
  key: 'intro',
  name: 'Get started'
};

const myBasics = {
  key: 'myBasics',
  number: '1',
  name: 'My basics'
};

const myHistory = {
  key: 'myHistory',
  number: '2',
  name: 'My history'
};

const organDonation = {
  key: 'organDonation',
  number: '3',
  name: 'Organ donation'
};

const voterRegistration = {
  key: 'voterRegistration',
  number: '4',
  name: 'Voting registration'
};

const voterPreRegistration = {
  key: 'voterPreRegistration',
  number: '4',
  name: 'Voting pre-registration'
};

const summary = {
  key: 'summary',
  number: '',
  name: 'Please take a minute to review your answers'
};
// --------------

const sections = {
  intro,
  myBasics,
  myHistory,
  organDonation,
  voterRegistration,
  voterPreRegistration,
  summary
};

const sectionData = (key) => {
  return sections[key] || {
    key: key,
    number: '',
    name: ''
  };
};

const cardType = (card, state) => {
  let applicationType = 'Card application';

  if(card === 'ID') {
    applicationType = 'Identification card application';
  }
  else if(card === 'DL') {
    applicationType = 'Drivers license application'
  }

  else if(card === 'ID-true') {
    if(state.applicationType === 'Drivers license application') {
      applicationType = 'Drivers license and ID application'
    }
    else{
      applicationType = 'Identification card application'
    }
  }
  else if(card === 'ID-false') {
    if(state.applicationType === 'Drivers license and ID application') {
      applicationType = 'Drivers license application'
    }
  }

  else if(card === 'DL-true') {
    if(state.applicationType === 'Identification card application') {
      applicationType = 'Drivers license and ID application'
    }
    else{
      applicationType = 'Drivers license application'
    }
  }
  else if(card === 'DL-false') {
    if(state.applicationType === 'Drivers license and ID application') {
      applicationType = 'Identification card application'
    }
  }

  return {applicationType: applicationType};
};

const defaultState = () => {
  return {
    applicationType: 'Card application',
    name: '',
    number: ''
  };
};

export default (state = defaultState(), action) => {
  if(action.type === TYPES.UPDATE_CARD_TYPE) {
    let newCardType = cardType(action.payload.value, state);
    return Object.assign({}, state, newCardType);
  }

  if (action.type === TYPES.CHANGE_SECTION ) {
    let newSection = sectionData(action.payload.value);
    return Object.assign({}, state, newSection);
  }

  return state;
};
