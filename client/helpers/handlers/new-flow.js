'use strict';

import defaultData       from '../data/default';

export default (dispatch) =>  {
  return (editKey) => {

    let data;
    if (editKey === 'cdlLegalName') {
      data = defaultData.CDL;
    }
    else if (editKey === 'legalName') {
      data = defaultData.IDDL;
    }

    dispatch({
      type:   'GET_DATA_SUCCESS',
      payload: {
        data: data,
        error: null
      }
    });

  }
};