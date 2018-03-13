'use strict';

import fetch from 'isomorphic-fetch';

import {
  updateApiStatus,
  getTranslationSuccess,
  getTranslationError
} from './index';

const fetchTranslation = (locale, fetcher) => {
  fetcher = fetcher || fetch;
  return fetcher('/api/translation/' + locale)
    .then(function(res) {
      if (res.status >= 200 && res.status <= 299) {
        return res.json();
      } else{
        throw new Error(
          JSON.stringify(res.json())
        );
      }
    });
};

const getErrorMessage = (err) => {
  let message, error;

  try {
    error = JSON.parse(err);
    message = error.message;
  } catch(e) {
    console.log(e);
    message = 'Something went wrong';
  }

  return message;
};

const getTranslation = function (locale, fetcher) {
  return function (dispatch) {
    dispatch(updateApiStatus('loading'));

    return fetchTranslation(locale, fetcher)
      .then(function (data) {
        dispatch(getTranslationSuccess(data));
        dispatch(updateApiStatus('success'));
      })
      .catch(function (err) {
        let message = getErrorMessage(err.message);
        dispatch(getTranslationError(message));
        dispatch(updateApiStatus('error'));
      });
  };
};

export default getTranslation;
