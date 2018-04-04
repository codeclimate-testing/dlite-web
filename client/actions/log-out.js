'use strict';

import fetch          from 'isomorphic-fetch';
import { signInURL }  from '../helpers/data/pathnames';

require('es6-promise').polyfill();

export const logOut = (history) => {
  return (dispatch) => {
    dispatch({
      type: 'UPDATE_LOGGED_IN',
      payload: {
        value: false
      }
    });
    return fetch('/apply/log-out')
    .then(() => {
      return history.push(signInURL());
    });
  };
};