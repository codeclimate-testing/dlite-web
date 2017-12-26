'use strict';

import {
  addValidation,
  removeValidation
} from '../../actions';

export const onBlurValidateGenerator = (dispatch) => {
  const onBlurValidate = (event) => {
    let name = event.target.name;
    dispatch(addValidation(name));
  };

  return onBlurValidate;
};

export const onFocusClearValidationGenerator = (dispatch) => {
  const onFocusClearValidation = (event) => {
    let name = event.target.name;
    dispatch(removeValidation(name));
  };

  return onFocusClearValidation;
};
