'use strict';

import getTranslation     from '../../actions/get-translation';
import { updateLanguage } from '../../actions';

export default (dispatch) => {
  return (value) => {
    dispatch(updateLanguage('language', value));
    if( value === 'emoji') {
      getTranslation(value)(dispatch);
    }
  };
};
