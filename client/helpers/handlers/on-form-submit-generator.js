'use strict';

import { clearValidations } from '../../actions';

const preventPageReload = (event) => {
  event.preventDefault();
};

export default (dispatch) => {
  return (event) => {
    preventPageReload(event);
    dispatch(clearValidations());
  };
};
