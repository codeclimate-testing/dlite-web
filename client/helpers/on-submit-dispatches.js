'use strict';

import { hasValue }               from './data/validations';
import { nextPath }               from './navigation/page';
import { postData }               from '../actions/api-actions';
import getTranslation             from '../actions/get-translation';
import { updateLanguage }         from '../actions/index';
import { languageIsSelected }     from './data/application';
import {
  updateCitizenStatus,
  updateEligibilityRequirements
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

export const saveApplication = (stateProps, dispatch, ownProps) => {
  return (e) => {
    e.preventDefault();
    dispatch(postData(stateProps.application))
      .then((res) => {
        ownProps.history.push(
          nextPath('summary', res)
        )
      });
  };
};

export const saveCDL = (stateProps, dispatch, ownProps) => {
  return (e) => {
    e.preventDefault();
    dispatch(postData(stateProps.cdl))
    .then(res => {
      ownProps.history.push(
        nextPath('cdlSummary', res)
      );
    });
  };
};

export const applicationLanguageSubmit = (stateProps, dispatch, ownProps) => {
  return (e) => {
    e.preventDefault();

    let choiceMade        = languageIsSelected(stateProps.language);
    let nonEnglishChoice  = stateProps.language !== 'en';

    if (!choiceMade) {
      dispatch(updateLanguage('language', 'en'));
    }

    if (choiceMade && nonEnglishChoice) {
      getTranslation(stateProps.language)(dispatch);
    }

    return ownProps.history.push(
      nextPath('chooseLanguage', stateProps)
    );
  };
};
