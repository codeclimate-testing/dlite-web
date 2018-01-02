import { TYPES } from '../../actions';

function defaultState() {
  return '';
}

export default function(state = defaultState(), action) {
  if (action.type !== TYPES.UPDATE_EDIT_MODE) { return state; }

  let payload = action.payload.value.toString() === 'true';
  return payload || state;
}
