import { TYPES } from '../../actions';

function defaultState() {
  return '';
}

const hoverDown = (state, all) => {
  let index = 0;
  let maxIndex = all.length - 1;
  if (state === all[maxIndex]) {
    index = maxIndex;
  } else {
    index = all.indexOf(state);
    index = index + 1;
  }

  return all[index];
};

const hoverUp = (state, all) => {
  let index = all.indexOf(state);
  if (index > 0) {
    index = index - 1;
  } else {
    index = 0;
  }

  return all[index];
};

export default function(state = defaultState(), action) {
  if (!action.type.match(/HOVER/)) { return state; }
  if (action.type === TYPES.CLEAR_HOVER) { return defaultState(); }

  let allValues = action.payload.value || [];

  if (action.type === TYPES.HOVER_UP) {
    return hoverUp(state, allValues);
  } else {
    return hoverDown(state, allValues);
  }
}
