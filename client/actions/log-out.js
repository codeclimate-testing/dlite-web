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
    return fetch('/apply/log-out', {
      method: 'GET',
      credentials: 'same-origin',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(() => {
      return history.push(signInURL());
    });
  };
};