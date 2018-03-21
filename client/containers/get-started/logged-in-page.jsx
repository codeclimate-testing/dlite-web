'use strict';
import { nextPath }             from '../../helpers/navigation/page';
import { getAppKey }            from '../../helpers/data/pathnames';
import {
  buildCookie,
  getAppNameCookie
} from '../../helpers/data/cookies';

const loggedIn = (props) => {

  // set isLoggedIn key for localhost
  if (APP_ENV === 'development') {
    document.cookie = 'isLoggedIn=true;path=/';
  }

  let appName = getAppNameCookie();
  let pageKey = getAppKey(appName);

  // include placeholder flow prop
  let pathURL = nextPath(pageKey, {
    flow: ''
  });

  props.history.push(pathURL);
  return null;
};


export default loggedIn;