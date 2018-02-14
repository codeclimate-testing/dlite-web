'use strict';

import { TYPES } from '../../../actions';

const defaultState = () => {
 return {
    isSelected:  '',
    politicalPartyChoose: '',
    otherParty: ''
  };
};

const formReducer = (state = defaultState(), action) => {
  if (action.type !== TYPES.UPDATE_POLITICAL_PARTY_CHOOSE) { return state; }
  if (!action.payload) { return state; }

  let data = Object.assign({}, state);

  if (action.payload.name === 'politicalPartyChoose') {
    data = Object.assign({}, data, {
      isSelected: state.isSelected,
      otherParty: '',
      politicalPartyChoose: action.payload.value
    });
  } else {
    data[action.payload.name] = action.payload.value;
  }
  return data;
};

export default formReducer;