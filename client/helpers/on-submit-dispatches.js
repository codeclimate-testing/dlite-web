'use strict';

import { hasValue }               from './data/validations';
import { nextPath }               from './navigation/page';
import { postData }               from '../actions/api-actions';
import getTranslation             from '../actions/get-translation';
import { updateLanguage }         from '../actions/index';
import { appLanguageIsSelected }  from './data/application';
import { isPreregistering }       from './calculate-age';
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

export const defaultLanguage = (stateProps, dispatch, ownProps) => {
  return (e) => {
    e.preventDefault();

    if (!appLanguageIsSelected(stateProps.appLanguage)) {
      dispatch(updateLanguage('appLanguage', 'en'));
    }

    return ownProps.history.push(
      nextPath('chooseLanguage', stateProps)
    )
  };
};

export const applicationLanguageSubmit = (stateProps, dispatch, ownProps) => {
  return (e) => {
    e.preventDefault();

    let choiceNotMade = !appLanguageIsSelected(stateProps.appLanguage);
    let choiceIsEngish = stateProps.appLanguage == 'en';

    if (choiceNotMade) {
      dispatch(updateLanguage('appLanguage', 'en'));
    }

    if (choiceNotMade || choiceIsEngish) {
      return ownProps.history.push(
        nextPath('chooseLanguage', stateProps)
      );
    } else {
      return getTranslation(stateProps.appLanguage);
    }
  };
};
