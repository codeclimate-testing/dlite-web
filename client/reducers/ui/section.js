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
  name: 'Voter registration'
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
  summary
};

const sectionData = (key) => {
  return sections[key] || {
    key: key,
    number: '',
    name: ''
  };
};

const defaultState = () => {
  return {
    applicationType: 'Card application',
    name: '',
    number: ''
  };
};

export default (state = defaultState(), action) => {
  if (action.type !== TYPES.CHANGE_SECTION) { return state; }

  let newSection = sectionData(action.payload.value);
  return Object.assign({}, state, newSection);
};
