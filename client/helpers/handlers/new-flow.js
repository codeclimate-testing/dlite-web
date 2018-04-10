'use strict';

import defaultData       from '../data/default';

export default (dispatch) =>  {
  return (editKey) => {
    if (editKey === 'cdlLegalName'){
      // clear cdl
      dispatch({
        type: 'GET_DATA_SUCCESS',
        payload: {
          data: defaultData.CDL,
          error: null
        }
      });
    }
    else if(editKey === 'legalName') {
      // clear id-dl
      dispatch({
        type: 'GET_DATA_SUCCESS',
        payload: {
          data: defaultData.IDDL,
          error: null
        }
      });
    }
  }
};