'use strict';
import { postData }         from '../../actions/api-actions';
import { nextPath }         from '../navigation/page';
import { getSummaryKey }    from '../data/summary';

export const saveApplication = (dispatch) => {
  return (stateProps, appType) => {
    let appData = [stateProps[appType], {userID: stateProps.server.userData.userID}, {pathname: stateProps.server.pathname}];
    let app = Object.assign({}, ...appData);
    let editKey = getSummaryKey(appType);

    return (e) => {
      e.preventDefault();
      dispatch(postData(app))
        .then((res) => {
          stateProps.history.push(
            nextPath(editKey, res)
          );
        });
    };
  };
};