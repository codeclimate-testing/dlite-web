'use strict';

import { getAppNameCookie }         from '../data/cookies';
import { parseChooseApp }           from '../data/application';
import { chooseApp }                from '../../actions/index';

export default (dispatch) => {
  return () => {
    let appName = getAppNameCookie();
    let chosenApp = parseChooseApp(appName);
    dispatch(chooseApp('chooseApplication', chosenApp));
    return appName;
  };
};