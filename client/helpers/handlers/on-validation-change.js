'use strict';

import {
  addValidation
} from '../../actions';

export const onBlurValidateGenerator = (dispatch) => {
  const onBlurValidate = (event) => {
    let name = event.target.name;
    dispatch(addValidation(name));
  };

  return onBlurValidate;
};
