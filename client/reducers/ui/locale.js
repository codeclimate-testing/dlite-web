import { TYPES } from '../../actions';

function defaultState() {
  return 'en';
}

export default function(state = defaultState(), action) {
  if (action.type !== TYPES.UPDATE_LOCALE) { return state; }
  let payload = action.payload.value;
  return payload || state;
}
