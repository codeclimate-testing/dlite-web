'use strict';

import { TYPES }              from '../../../actions';
import formCheckArrayReducer  from '../../form-check-array-reducer';
import reduceByCardType       from '../../reduce-by-card-type';

const defaultState = () => {
  return {
    correctOrUpdate: '',
    sections: [],
    other: ''
  }
};

const formReducer = (state = defaultState(), action) => {
  if (action.type !== TYPES.UPDATE_CARD_CHANGES) { return state; }

  if (action.payload.name === 'DL-sections') {
    let data = Object.assign({}, state);
    return formCheckArrayReducer('sections', action.payload.value, data);
  }
  else {
    return reduceByCardType(action, state, 'DL');
  }
};

export default formReducer;
