'use strict';

import { hasValue }                           from './data/validations';
import { nextPath }                           from './navigation/page';
import { postData }                           from '../actions/api-actions';
import getTranslation                         from '../actions/get-translation';
import { saveLanguageCookie }                 from './data/cookies';
import { doNotNeedToLoadTranslations }        from '../helpers/data/translator';
import {
  updateCitizenStatus,
  updateEligibilityRequirements
} from '../actions/index';
import {
  updateLanguage,
  updateTranslationLanguage
} from '../actions/index';

export const updateCitizenship = (stateProps, dispatch) => {
  return (e) => {
    e.preventDefault();
    if (!hasValue(stateProps.citizenStatus)) {
      dispatch(updateCitizenStatus('citizenStatus', 'decline'));
    }
  };
};

export const updateEligibility = (stateProps, dispatch) => {
  return (e) => {
    e.preventDefault();
    if (!hasValue(stateProps.eligibilityRequirements)) {
      dispatch(updateEligibilityRequirements('eligibilityRequirements', 'decline'));
    }
  };
};

export const applicationLanguageSubmit = (stateProps, dispatch, ownProps) => {
  return (e) => {
    e.preventDefault();

    if (doNotNeedToLoadTranslations(stateProps.language)) {
      dispatch(updateLanguage('language', 'en'));
      dispatch(updateTranslationLanguage('en'));
    }

    else {
      getTranslation(stateProps.language)(dispatch);
    }

    saveLanguageCookie(stateProps.language);

    return ownProps.history.push(
      nextPath('chooseLanguage', stateProps)
    );
  };
};
