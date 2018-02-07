'use strict';

import { hasValue }               from './data/validations';
import { nextPath }               from './data/page';
import { postData }               from '../actions/api-actions';
import { updateLanguage }         from '../actions/index';
import { appLanguageIsSelected }  from './data/application';
import {
  updateCitizenStatus,
  updateEligibilityRequirements
}    from '../actions/index';


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

export const useAPI = (stateProps, dispatch, ownProps) => {
  return (e) => {
    e.preventDefault();
    dispatch(postData(stateProps.application))
    .then(
      ownProps.history.push(
        nextPath('summary', stateProps.server)
      )
    )
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
