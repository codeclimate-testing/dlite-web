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

    let cookieLanguage = getLanguageFromCookie();
    dispatch(updateLanguage('language', cookieLanguage));
    if (!doNotNeedToLoadTranslations(cookieLanguage)) {
      dispatch(getTranslation(cookieLanguage));
    }

    new AutoLogout(history, dispatch);

    dispatch(getUserData(uuid))
      .then((res) => {

        let appName = getAppNameCookie();
        let chosenApp = parseChooseApp(appName);
        dispatch(chooseApp(chosenApp));

        dispatch(updateLoggedIn(true));

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