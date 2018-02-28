'use strict';

import { updateLocale } from '../../actions';

export default (dispatch) => {
  return (value) => {
    dispatch(updateLocale(value));
  };
};
