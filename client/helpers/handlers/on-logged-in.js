'use strict';
import { getUserData }                  from '../../actions/get-user-data';
import getTranslation                   from '../../actions/get-translation';
import {
  updateLanguage,
  updateLoggedIn,
  chooseApp
 } from '../../actions/index';
import { nextPath }                     from '../navigation/page';
import { doNotNeedToLoadTranslations }  from '../data/translator';
import {
  getLanguageFromCookie,
  getAppNameCookie
 } from '../data/cookies';
import AutoLogout                       from './auto-logout';
import {
  getAppKey,
  signInURL
} from '../data/pathnames';

export default (dispatch) => {
  return (user, history) => {

    let cookieLanguage = getLanguageFromCookie();
    dispatch(updateLanguage('language', cookieLanguage))
    if (!doNotNeedToLoadTranslations(cookieLanguage)) {
      dispatch(getTranslation(cookieLanguage));
    }

    new AutoLogout(history, dispatch);

    dispatch(getUserData(user))
      .then((res) => {
        console.log('client got response from server: ');
        console.log(res)
        // get appName that was either saved on idme page (dev) or on server after successful login (prod)
        let appName = getAppNameCookie();
        dispatch(chooseApp(appName));
        dispatch(updateLoggedIn(true));

        let pageKey = getAppKey(appName);
        let pathURL = nextPath(pageKey, {
          flow: '',
          userData: res
        });
        return history.push(pathURL);
      })
      .catch((err) => {
        console.log(err);
        return history.push(signInURL());
      });
  }
};