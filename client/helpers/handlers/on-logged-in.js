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

    dispatch(getUserData(uuid))
      .then((res) => {
        let pageKey = getAppKey(appName);
        let pathURL = nextPath(pageKey, {
          flow: '',
          userData: res,
          appName: appName
        });

        if (res === 'user-fail') {
          return history.push(signInURL());
        }

        return history.push(pathURL);
      });
  };
};