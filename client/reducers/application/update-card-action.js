'use strict';

import { TYPES }            from '../../actions';
import formValueReducer     from './../form-value-reducer';

const defaultState = () =>  {
  return '';
};

export default formValueReducer(defaultState, TYPES.UPDATE_CARD_ACTION);


// const formReducer = (state = defaultState(), action) => {
//   if (!action.payload) { return state; }
//   if (action.type !== TYPES.UPDATE_CARD_ACTION) { return state; }

//     return action.payload.value;

//   return defaultState();
// };

// export default formReducer;