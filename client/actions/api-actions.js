'use strict';

import axios from 'axios';

export function fetchData(url) {
	return function(dispatch) {
		dispatch({type: 'REQ_DATA'});
		return axios({
			url: url,
			timeout: 20000,
			method: 'get',
			responseType: 'json'
		})
			.then(function(response) {
				dispatch({ type: 'RECV_DATA', data: response.data});
			})
			.catch(function(response){
				dispatch({type: 'RECV_ERROR', data: response.data});
			})
	}
};
