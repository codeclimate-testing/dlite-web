'use strict';

import { TYPES }            from '../../actions';
import formObjectReducer    from '../form-object-reducer';

function defaultState() {
  return {
    type: [],
    needCertificates: ''
  }
};

export default formObjectReducer(defaultState, TYPES.UPDATE_CDL_CERTIFICATES, ['type']);