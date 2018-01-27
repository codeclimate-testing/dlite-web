'use strict';

import { TYPES }        from '../../actions';
import { hasValue }     from '../../helpers/data/validations';

const defaultState = () => {
  return {
    appLanguage: '',
    ballotLanguage: ''
  };
};

const formReducer = (state = defaultState(), action) => {
  if (action.type !== TYPES.UPDATE_APP_LANGUAGE && action.type !== TYPES.UPDATE_BALLOT_LANGUAGE) { return state;}

  let data = Object.assign({}, state);

  if (action.type === TYPES.UPDATE_APP_LANGUAGE) {
    data.appLanguage = action.payload.value;

    if ( !hasValue(data.ballotLanguage)) {
      data.ballotLanguage = data.appLanguage;
    }

  } else if (action.type === TYPES.UPDATE_BALLOT_LANGUAGE) {
    data.ballotLanguage = action.payload.value;
  };

  return Object.assign({}, state, data);
}
export default formReducer;