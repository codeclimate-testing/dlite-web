'use strict';

import defaultData       from '../data/default';

export default (dispatch) =>  {
  return (editKey) => {

    let data, chooseApp;
    if (editKey === 'cdlLegalName') {
      data = defaultData.CDL;
      chooseApp = 'cdl';
    }
    else if (editKey === 'legalName') {
      data = defaultData.IDDL;
      chooseApp = 'iddl';
    }

    dispatch({
      type: 'CHOOSE_APP',
      payload: {
        value: chooseApp
      }
    });


    dispatch({
      type:   'GET_DATA_SUCCESS',
      payload: {
        data: data,
        error: null
      }
    });

  }
};