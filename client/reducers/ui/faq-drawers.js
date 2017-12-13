import { TYPES } from '../../actions';

function defaultState() {
  return {
    FCCInfo:          false,
    FCCRequirements:  false
  };
}

export default function(state = defaultState(), action) {
  if (action.type !== TYPES.TOGGLE_FAQ_DRAWER) { return state; }

  let data = {};
  let payload = action.payload;

  if (payload) {
    let drawerName = payload.value;
    data[drawerName] = !state[drawerName];
  }

  return Object.assign({}, state, data);

}
