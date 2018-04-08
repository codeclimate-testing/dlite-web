'use strict';

import fetch          from 'isomorphic-fetch';

require('es6-promise').polyfill();

export const isLoggedIn = (fetcher = fetch) => {
  return function (dispatch) {

    return fetcher('/api/isLoggedIn',{
      method: 'GET',
      credentials: 'same-origin',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        }
      })
      .then(function(res){
        if (res.status === 200) {
          return res.json();
        }
        else{
          throw new Error('login-fail');
        }
      })
      .then(function (data) {
        dispatch({
          type: 'UPDATE_LOGGED_IN',
          payload: {
            value: data.status,
          }
        });
        return data;
      })
      .catch( function(err){
        dispatch({
          type: 'UPDATE_LOGGED_IN',
          payload: {
            value: false,
          }
        });
      });
  }
}