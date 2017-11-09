'use strict'

const apiReducer = (state, action) => {
  switch (action.type) {
    case 'GET_DATA_SUCCESS':
      return Object.assign({}, state, action.data);
    case 'GET_DATA_ERROR':
      return state;
    case 'POST_DATA_SUCCESS':
      return Object.assign({}, state, action.data);
    case 'POST_DATA_ERROR':
      return state;
    default:
      return state;
  }
};

export default apiReducer;