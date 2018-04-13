'use strict';

import { getLanguageFromCookie }        from '../data/cookies';
import { doNotNeedToLoadTranslations }  from '../data/translator';
import { updateLanguage }               from '../../actions/index';
import getTranslation                   from '../../actions/get-translation';

export default (dispatch) => {
  return () => {
    let cookieLanguage = getLanguageFromCookie();
    dispatch(updateLanguage('language', cookieLanguage));

    if (!doNotNeedToLoadTranslations(cookieLanguage)) {
      dispatch(getTranslation(cookieLanguage));
    }
  };
};
