'use strict';

import { TYPES }            from '../../../actions';
import formObjectReducer    from '../form-object-reducer';

function defaultState() {
  return {
    type: [],
    endorsement: [],
    needEndorsement: ''
  }
};

export default formObjectReducer(defaultState, TYPES.UPDATE_LICENSE_TYPE, ['type', 'endorsement'])
