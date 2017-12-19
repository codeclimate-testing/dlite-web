'use strict';

import { TYPES } from '../../actions';

const addValue = (value, collection) => {
  let state = collection.slice(0);
  state.push(value);
  return state;
};

const removeValue = (value, collection) => {
  return collection
    .map((accordionId) => {
      if (accordionId !== value) { return accordionId; }
    })
    .reduce(
      (aggregate, element) => {
        if (element) { aggregate.push(element); }
        return aggregate;
      },
      []
    );
}

const accordionsReducer = (state=[], action) => {
  if (action.type !== TYPES.TOGGLE_ACCORDION) { return state; }

  const value = action.payload.value;

  let newState = addValue(value, state);
  state.forEach((d) => {
    if(d === value) {
      newState = removeValue(value, state);
    }
  });

  return newState
}

export default accordionsReducer;
