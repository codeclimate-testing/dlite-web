'use strict';

import axios from 'axios';

//Required for running tests with node horseman
require('es6-promise').polyfill();

export const getData = function (apiHost, id) {
  let url = apiHost + '/' + 'application' + '/' + id;
  return function (dispatch) {
    return axios({
      url: url,
      method: 'get',
      responseType: 'json'
    })
      .then(function (response) {
        dispatch({ type: 'GET_DATA_SUCCESS', data: response.data });
      })
      .catch(function (err) {
        dispatch({ type: 'GET_DATA_ERROR', error: err.message, data: {} });
      })
  }
};

export const postData = function (apiHost, body) {
  let url = apiHost + '/' + 'application';
  return function (dispatch) {
    return axios({
      url: url,
      data: body,
      method: 'post',
      responseType: 'json'
    })
      .then(function (response) {
        dispatch({ type: 'POST_DATA_SUCCESS', data: response.data });
      })
      .catch(function (err) {
        dispatch({ type: 'POST_DATA_ERROR', error: err.message, data: {} });
      })
  }
}
