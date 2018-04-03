'use strict';
import { buildAppName }   from '../../helpers/data/cookies';

function defaultState() {
  return '';
};

export default function(state = defaultState(), action) {
  if (action.type !==  'CHOOSE_APP') { return state; }
  let payload = action.payload.value;
  buildAppName(payload); //save cookie
  return payload || state;
}