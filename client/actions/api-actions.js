'use strict';

import axios from 'axios';

export const getData = function(url, id) {
	return function(dispatch) {
		return axios({
			url: url + '/' + id,
			method: 'get',
			responseType: 'json'
		})
			.then(function(response) {
				dispatch({ type: 'GET_DATA_SUCCESS', data: response.data});
			})
			.catch(function(err){
				dispatch({type: 'GET_DATA_ERROR', error: err.message, data: {}});
			})
	}
};

export const postData =	function(url, body) {
	return function(dispatch) {
		return axios({
			url: url,
			data: body,
			method: 'post',
			responseType: 'json'
		})
			.then(function(response) {
				dispatch({ type: 'POST_DATA_SUCCESS', data: response.data});
			})
			.catch(function(err){
				dispatch({type: 'POST_DATA_ERROR', error: err.message, data: {}});
			})
	}
}
