'use strict';

import fetch          from 'isomorphic-fetch';

require('es6-promise').polyfill();

export const logOut = (location = window.location, fetcher = fetch) => {
  return (dispatch) => {
    dispatch({
      type: 'UPDATE_LOGGED_IN',
      payload: {
        value: false
      }
    });

    if (APP_MODE === 'tst') {
      location.href = LOGOUT_URL;
    }

    return fetcher('/apply/log-out', {
      method: 'GET',
      credentials: 'same-origin',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'text/plain'
      }
    })
    .then((res) => {
      location.href = res.url;
    });
  };
};