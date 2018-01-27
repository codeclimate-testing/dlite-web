'use strict';

import { TYPES }        from '../../actions';
import { hasValue }     from '../../helpers/data/validations';

const defaultState = () => {
  return {
    appLanguage: 'en',
    ballotLanguage: 'en',
    hasChosenBallot: false
  };
};

const formReducer = (state = defaultState(), action) => {
  if (action.type !== TYPES.UPDATE_LANGUAGE ) { return state;}

  let data = Object.assign({}, state);
  data[action.payload.name] = action.payload.value;

  // choosing the app language at the beginning of the flow should cause the ballot language to be pre-selected
  if (action.payload.name === 'appLanguage' && !data.hasChosenBallot ) {
      data.ballotLanguage = data.appLanguage;
  } else if (action.payload.name === 'ballotLanguage') {
    data.hasChosenBallot = true;
  }

  return Object.assign({}, state, data);
}
export default formReducer;