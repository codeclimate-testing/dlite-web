'use strict';

import { updateCitizenStatus }    from '../../actions/index';
import { citizenStatusNotChosen } from '../data/voting';
import { nextPath }               from '../data/page';
import { postData }               from '../../actions/api-actions';
import { updateLanguage }         from '../../actions/index';
import { appLanguageIsSelected }  from '../data/application';

export const updateCitizenship = (stateProps, dispatch) => {
  return (e) => {
    e.preventDefault();
    if (citizenStatusNotChosen(stateProps.citizenStatus)) {
      dispatch(updateCitizenStatus('citizenStatus', 'decline'));
    }
  }
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

    if (!appLanguageIsSelected(stateProps.application.appLanguage)) {
      dispatch(updateLanguage('appLanguage', 'en'));
    }
    return ownProps.history.push(
      nextPath('chooseLanguage', stateProps)
    )
  }
};
