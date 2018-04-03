'use strict';
import { nextPath }               from '../helpers/navigation/page';
import { getAppKey }              from '../helpers/data/pathnames';
import connectForm                from '../helpers/connect-form';
import { chooseApp }              from '../actions/index';

import AutoLogout                 from '../helpers/handlers/auto-logout';
import { splitPathname }          from '../helpers/data/pathnames';
import {
  buildLoggedIn,
  getAppNameCookie
} from '../helpers/data/cookies';

const LoggedIn = (props) => {
  let appName = getAppNameCookie();
  let pageKey = getAppKey(appName);

  // set isLoggedIn key for localhost
  if (APP_ENV === 'development' || APP_ENV === 'test') {
    buildLoggedIn();
    appName = splitPathname(props);
    pageKey = getAppKey(appName)
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

function mapStateToProps(state) {
  return {
    chooseApp         : state.ui.chooseApp,
    language          : state.ui.language
  }
};

export default connectForm(mapStateToProps, chooseApp, LoggedIn);