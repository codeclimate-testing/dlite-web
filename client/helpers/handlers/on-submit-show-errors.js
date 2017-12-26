'use strict';

import { addValidation } from '../../actions';

export default (dispatch) => {
  return (event) => {
    event.preventDefault();
    dispatch(addValidation('all'));
  };
};

