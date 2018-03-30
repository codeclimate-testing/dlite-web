'use strict';

import getTranslation                 from '../../actions/get-translation';
import { updateTranslationLanguage }  from '../../actions';

export default (dispatch) => {
  return (value) => {
    dispatch(updateTranslationLanguage(value));
    if( value !== 'en') {
      getTranslation(value)(dispatch);
    }
  };
};
