'use strict';

import { TYPES }            from '../../actions';
import formObjectReducer    from './form-object-reducer';

function defaultState() {
  return {
    correctOrUpdate: '',
    sections: []
  }
};

export default formObjectReducer(defaultState, TYPES.UPDATE_CARD_UPDATES, ['sections']);