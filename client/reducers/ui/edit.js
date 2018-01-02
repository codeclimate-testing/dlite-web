import { TYPES } from '../../actions';

function defaultState() {
  return '';
}

export default function(state = defaultState(), action) {
  if (action.type !== TYPES.UPDATE_NEXT_ADDRESS) { return state; }

  let payload = action.payload;
  return payload.value || state;
}
