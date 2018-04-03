'use strict';

import fetch from 'isomorphic-fetch';
require('es6-promise').polyfill();

export const getUserData = (id) => {
  return function(dispatch) {
    dispatch({
      type: 'UPDATE_API_STATUS',
      payload: {
        name: 'apiStatus',
        value: 'loading'
      }
    });
    return fetch('/api/user/' + id, {
      method: 'GET',
      credentials: 'same-origin',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(res => {
        if(res.status === 200) {
          return res.json();
        }
        else {
          throw new Error('user-fail');
        }
      })
      .then(data => {
        dispatch({
          type: 'UPDATE_USER_DATA',
          payload: {
            name: 'userData',
            value: data
          }
        });
        dispatch({
          type: 'UPDATE_API_STATUS',
          payload: {
            name: 'apiStatus',
            value: 'success'
          }
        })
        return data;
      })
      .catch(err => {
        dispatch({
          type: 'GET_DATA_ERROR',
          payload: {
            data: {},
            error: err.message
          }
        });
        dispatch({
          type: 'UPDATE_API_STATUS',
          payload: {
            name: 'apiStatus',
            value: 'error'
          }
        });
        return 'user-fail';
      });
  };
};