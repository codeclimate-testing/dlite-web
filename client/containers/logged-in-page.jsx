'use strict';
import { nextPath }               from '../helpers/navigation/page';
import connectForm                from '../helpers/connect-form';
import { getUserData }            from '../actions/get-user-data';
import AutoLogout                 from '../helpers/handlers/auto-logout';
import {
  getAppKey,
  signInURL,
  splitPathname
} from '../helpers/data/pathnames';
import {
  buildLoggedIn,
  getAppNameCookie,
} from '../helpers/data/cookies';

const LoggedIn = (props) => {
  let appName = getAppNameCookie();
  let pageKey = getAppKey(appName);
  let user = props.match.params.user;
  // set isLoggedIn key for localhost
  if (APP_ENV === 'development' || APP_ENV === 'test') {
    buildLoggedIn();
  }
  let history = props.history;
  // begin timer to log out after inactivity
  new AutoLogout(history, appName);

  // make api call to /api/user/:id and save result to redux
  props.dispatch(getUserData(user))
  .then((res) => {
    props.loadTranslationFromCookie();

    if (res === 'user-fail') {
      console.log('error: failed to retrieve records')
      return history.push(signInURL(appName));
    }

    // include placeholder flow prop
    let pathURL = nextPath(pageKey, {
      flow: '',
      userData: res
    });
    return history.push(pathURL);
  });

  return null;
};


export default connectForm(null, null, LoggedIn);