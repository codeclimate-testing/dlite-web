'use strict';

import fetch from 'isomorphic-fetch';
require('es6-promise').polyfill();

export const postData = function (body, fetcher = fetch) {
  return function (dispatch) {
    dispatch({
      type: 'UPDATE_API_STATUS',
      payload: {
        name:   'apiStatus',
        value:  'loading'
      }
    });
    return fetcher('/api/application',{
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
      .then(function(res){
        if (res.status === 200) {
          return res.json();
        }
        else{
          throw new Error('api-fail');
        }
      })
      .then(function (data) {
        dispatch({
          type: 'POST_DATA_SUCCESS',
          payload: {
            data: data,
            error: null }
        });
        return data;
      })
      .then(function(data) {
        dispatch({
          type: 'UPDATE_API_STATUS',
          payload: {
            name:   'apiStatus',
            value:  'success'
          }
        });
        return 'success';
      })
      .catch(function (err) {
        dispatch({
          type: 'POST_DATA_ERROR',
          payload: {
            data: {},
            error: err.message }
        });
        dispatch({
          type: 'UPDATE_API_STATUS',
          payload: {
            name:   'apiStatus',
            value:  'error'
          }
        });
        return 'api-fail';
      })
  };
};

export const getData = function (dispatch) {
  return function (id, fetcher = fetch) {
    dispatch({
      type: 'UPDATE_API_STATUS',
      payload: {
        name:   'apiStatus',
        value:  'loading'
      }
    });

    return fetcher('/api/application/' + id, {
      method: 'GET',
      credentials: 'same-origin',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(function(res){
        if(res.status >= 200 && res.status <= 299) {
          return res.json();
        }
        else{
          throw new Error('api-fail');
        }
      })
      .then(function (data) {

        let chooseApp = 'iddl';
        if (data.hasOwnProperty('cdl')) {
          chooseApp = 'cdl';
        }

        dispatch({
          type: 'CHOOSE_APP',
          payload: {
            value: chooseApp
          }
        });

        dispatch({
          type: 'GET_DATA_SUCCESS',
          payload: {
            data: data,
            error: null }
        });
        dispatch({
          type: 'UPDATE_API_STATUS',
          payload: {
            name:   'apiStatus',
            value:  'success'
          }
        });
        return 'success';
      })
      .catch(function (err) {
        dispatch({
          type: 'GET_DATA_ERROR',
          payload: {
            data: {},
            error: err.message }
          });
          dispatch({
            type: 'UPDATE_API_STATUS',
            payload: {
              name:   'apiStatus',
              value:  'error'
            }
          });
          return 'api-fail';
      });
  };
};
