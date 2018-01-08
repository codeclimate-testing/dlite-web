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
  name: 'Summary'
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
  let applicationType = 'card application';

  if(card === 'ID') {
    applicationType = 'identification card application';
  }
  else if(card === 'DL') {
    applicationType = 'drivers license application'
  }

  else if(card === 'ID-true') {
    if(state.applicationType === 'drivers license application') {
      applicationType = 'drivers license and ID application'
    }
    else{
      applicationType = 'identification card application'
    }
  }
  else if(card === 'ID-false') {
    if(state.applicationType === 'drivers license and ID application') {
      applicationType = 'drivers license application'
    }
  }

  else if(card === 'DL-true') {
    if(state.applicationType === 'identification card application') {
      applicationType = 'drivers license and ID application'
    }
    else{
      applicationType = 'drivers license application'
    }
  }
  else if(card === 'DL-false') {
    if(state.applicationType === 'drivers license and ID application') {
      applicationType = 'identification card application'
    }
  }

  return {applicationType: applicationType};
};

const defaultState = () => {
  return {
    applicationType: 'card application',
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
