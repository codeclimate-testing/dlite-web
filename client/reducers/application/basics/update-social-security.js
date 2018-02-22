'use strict';

import { TYPES }          from '../../../actions';
import formObjectReducer  from '../../form-object-reducer';

function defaultState() {
  return {
    part1: '',
    part2: '',
    part3: '',
    hasSocialSecurity: ''
  };
}


export default formObjectReducer(defaultState, TYPES.UPDATE_SOCIAL_SECURITY);
