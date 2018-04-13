'use strict';

import fetch          from 'isomorphic-fetch';

require('es6-promise').polyfill();

export const getTimeout = (dispatch) => {
  return function (fetcher = fetch) {

    return fetcher('/api/get-app-env',{
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
          throw new Error('app-env-fail');
        }
      })
      .then(function (data) {
        dispatch({
          type: 'UPDATE_APP_TIMEOUT',
          payload: {
            name: 'timeout',
            value: data.timeout,
          }
        });
        dispatch({
          type: 'UPDATE_ADA_TST',
          payload: {
            name: 'ada',
            value: data.adaTst,
          }
        });
        return data.timeout;
      })
      .then((timeout) => {
        return timeout;
      })
      .catch( function(err){
        console.log(err);
        return '600000';
      });
  }
};