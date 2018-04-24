'use strict';
import { getUserData }                  from '../../actions/get-user-data';
import { nextPath }                     from '../navigation/page';
import AutoLogout                       from './auto-logout';
import {
  getAppKey,
  signInURL
} from '../data/pathnames';

export default (dispatch) => {
  return (uuid, tstData, appName, history = window.__reactHistory) => {
    new AutoLogout(dispatch, tstData);

    let pageKey = getAppKey(appName);
    let pathURL;

    if (TST_ENV.toString() === 'true') {
      pathURL = nextPath(pageKey, {
        flow: '',
        userData: {
          appsLength: 0,
          userID: uuid,
          apps: [{
            name: '',
            cardType: [],
            cardAction: [],
            id: ''
          }]
        },
        appName: appName
      });
    }

    else {
      dispatch(getUserData(uuid))
        .then((res) => {
          let pageKey = getAppKey(appName);
          pathURL = nextPath(pageKey, {
            flow: '',
            userData: res,
            appName: appName
          });

          if (res === 'user-fail') {
            return history.push(signInURL());
          }
        });
    }

    return history.push(pathURL);
  };
};