'use strict';

const apiReducer = (state, action) => {
  switch (action.type) {
    case 'GET_DATA_SUCCESS':
      return Object.assign({}, state, action.payload.data);
    case 'GET_DATA_ERROR':
      return state;
    case 'POST_DATA_SUCCESS':
      let applicationID               = action.payload.data.application_id;
      let applicationState            = Object.assign({}, state);
      applicationState.application.id = applicationID;
      return applicationState;
    case 'POST_DATA_ERROR':
      return state;
    default:
      return state;
  }
};

export default apiReducer;
