'use strict';
import { getUserData }                  from '../../actions/get-user-data';
import getTranslation                   from '../../actions/get-translation';
import { isLoggedIn }                   from '../../actions/get-auth-status';
import {
  updateLanguage,
  chooseApp
 } from '../../actions/index';
import { nextPath }                     from '../navigation/page';
import { doNotNeedToLoadTranslations }  from '../data/translator';
import { parseChooseApp }               from '../data/application';
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
  return (uuid, history) => {

    //Set auto logout after user inactivity
    new AutoLogout(history, dispatch);

    dispatch(isLoggedIn());

    let cookieLanguage = getLanguageFromCookie();
    dispatch(updateLanguage('language', cookieLanguage));

    if (!doNotNeedToLoadTranslations(cookieLanguage)) {
      dispatch(getTranslation(cookieLanguage));
    }

    dispatch(getUserData(uuid))
      .then((res) => {

        let appName = getAppNameCookie();
        let chosenApp = parseChooseApp(appName);
        dispatch(chooseApp(chosenApp));

        let pageKey = getAppKey(appName);
        let pathURL = nextPath(pageKey, {
          flow: '',
          userData: res
        });
        return history.push(pathURL);
      })
      .catch((err) => {
        console.log('ERROR')
        console.log(err);
        return history.push(signInURL());
      });
  }
};