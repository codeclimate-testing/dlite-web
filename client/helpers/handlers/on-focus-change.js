'use strict';

import {
  blurPageElement,
  focusPageElement
} from '../../actions';

export const onBlurGenerator = (dispatch) => {
  return () => {
    dispatch(blurPageElement());
  };
};

export const onFocusGenerator = (dispatch) => {
  return (event) => {
    //let value = (event.target && event.target.value) || '';
    let id = (event.target && event.target.id) || '';
    dispatch(focusPageElement(id));
  };
};
