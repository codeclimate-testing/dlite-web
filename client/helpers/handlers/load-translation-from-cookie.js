'use strict';

import { languageIsSelected }           from '../data/application';
import { updateLanguage }               from '../../actions/index';
import getTranslation                   from '../../actions/get-translation';
import { getLanguageFromCookie }        from '../data/cookies';
import { doNotNeedToLoadTranslations }  from '../data/translator';

const loadTranslationFromCookie = (dispatch) => {
  return (language) => {

    if (!languageIsSelected(language)) {
      let cookieLanguage = getLanguageFromCookie();
      // save language from cookie to redux state.ui.language
      dispatch(updateLanguage('language', cookieLanguage));
      if (!doNotNeedToLoadTranslations(cookieLanguage)) {
        getTranslation(cookieLanguage)(dispatch);
      }
    }
  }
}


export default loadTranslationFromCookie;