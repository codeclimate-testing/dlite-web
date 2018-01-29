'use strict';

import { TYPES }              from '../../actions';
import cardAction             from './card-type/card-action';
import IDDL                   from './card-type/IDDL';
import youthID                from './card-type/youth-ID';

const defaultState = () => {
  return {
    ID: {
      isApplying: false,
      action: ''
    },
    DL: {
      isApplying: false,
      action: ''
    },
    IDDL: [],
    youthIDInstead: '',
    cardAction: ''
  };
};

const formReducer = (state = defaultState(), action) => {
  if (action.type !== TYPES.UPDATE_CARD_TYPE) { return state; }
  if (!action.payload) { return state; }

  let name = action.payload.name;
  let value = action.payload.value;
  let data = Object.assign({}, state);

  if (name === 'cardAction') {
    data = cardAction(value, data, defaultState());
  } else if (name === 'youthIDInstead' || name === 'youthIDOnly') {
    data = youthID(value, data, name);
  } else if (name === 'IDDL') {
    data = IDDL(value, data, defaultState());
  } else {
    // placeholder possibility for handling changing one of two cards from the summary screen
    // cardAction container could pass a value passed by the Link to the radio collection's name prop
    data[name].action = value;
  }
  return Object.assign({}, state, data);
};

export default formReducer;
