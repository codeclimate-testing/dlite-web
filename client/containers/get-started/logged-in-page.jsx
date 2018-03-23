'use strict';
import { nextPath }             from '../../helpers/navigation/page';
import { getAppKey }            from '../../helpers/data/pathnames';
import {
  buildLoggedIn,
  getAppNameCookie
} from '../../helpers/data/cookies';
import AutoLogout               from '../../helpers/handlers/auto-logout';

const loggedIn = (props) => {
  let appName = getAppNameCookie();
  let pageKey = getAppKey(appName);

  // set isLoggedIn key for localhost
  if (APP_ENV === 'development' || APP_ENV === 'test') {
    buildLoggedIn();
  }

  // include placeholder flow prop
  let pathURL = nextPath(pageKey, {
    flow: ''
  });

  props.history.push(pathURL);

  // begin timer to log out after inactivity
  new AutoLogout(props.history, appName);
  return null;

};


export default loggedIn;