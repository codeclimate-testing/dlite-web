'use strict';

import fetch from 'isomorphic-fetch';
require('es6-promise').polyfill();

export const getUserData = (uuid, fetcher = fetch) => {
  return function(dispatch) {
    dispatch({
      type: 'UPDATE_API_STATUS',
      payload: {
        name: 'apiStatus',
        value: 'loading'
      }
    });
    return fetcher('/api/user/' + uuid, {
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
        else if (res.status > 499 && res.status < 600) {
          return {
            appsLength: 0,
            userID: uuid,
            apps: [{
              name: '',
              cardType: [],
              cardAction: [],
              id: ''
            }]
          };
        }
        else {
          throw new Error('user-fail');
        }
      })
      .then((data) => {
        dispatch({
          type: 'UPDATE_USER_DATA',
          payload: {
            value: data
          }
        });
        dispatch({
          type: 'UPDATE_API_STATUS',
          payload: {
            name: 'apiStatus',
            value: 'success'
          }
        });
        return data;
      })
      .catch((err) => {
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
            value: 'get user data error'
          }
        });
        return 'user-fail';
      })
  };
};