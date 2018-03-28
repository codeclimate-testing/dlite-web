'use strict';

import { postData } from '../../actions/api-actions'

export default (dispatch) => {
  return (state) => {
    dispatch(postData(state))
  };
};

