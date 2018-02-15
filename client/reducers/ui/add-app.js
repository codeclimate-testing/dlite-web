'use strict';

import { TYPES } from '../../actions';

function defaultState() {
  return '';
};

export default function(state = defaultState(), action) {
  if (action.type !== TYPES.ADD_APP) { return state; }
  return action.payload.value || state;
};