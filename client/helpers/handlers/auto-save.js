'use strict';

import { postData } from '../../actions/api-actions'

export default (dispatch) => {
  return (state, appType, pathname = state.pathname) => {
    let appData = [state[appType], {userID: state.server.userData.userID}, {pathname: pathname}];
    let app = Object.assign({}, ...appData);
    dispatch(postData(app))
  };
};

