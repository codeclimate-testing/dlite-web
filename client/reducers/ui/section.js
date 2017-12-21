'use strict';

import { TYPES } from '../../actions';

const defaultState = () => {
  return {
    applicationType: 'Card application',
    name: 'Get started',
    number: ''
  };
};

export default (state = defaultState(), action) => {
  if (!action.type === '') { return state; }

  return state;
};
