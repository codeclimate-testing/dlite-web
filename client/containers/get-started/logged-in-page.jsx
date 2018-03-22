'use strict';
import { nextPath }             from '../../helpers/navigation/page';
import { getAppKey }            from '../../helpers/data/pathnames';
import {
  buildCookie,
  getAppNameCookie
} from '../../helpers/data/cookies';
import AutoLogout               from '../../helpers/handlers/auto-logout';

const loggedIn = (props) => {
  let appName = getAppNameCookie();
  let pageKey = getAppKey(appName);

  // set isLoggedIn key for localhost
  if (APP_ENV === 'development') {
    document.cookie = 'isLoggedIn=true;path=/';
  }

  // include placeholder flow prop
  let pathURL = nextPath(pageKey, {
    flow: ''
  });

  // begin timer to log out after inactivity
  new AutoLogout(props.history);
  return null;

};


export default loggedIn;