'use strict';
import formCheckArrayReducer  from '../form-check-array-reducer';
import {
  getDL,
  getID
} from '../../../helpers/data/card-type';

const IDDL = (value, data, blankState) => {
  // if coming from checkbox, use the formCheckArrayReducer
  if (value.split('-').length > 1) {
    data = formCheckArrayReducer('IDDL', value, data);
  } else {
    // otherwise if coming from a radio box we know the array will only have the selected value in it
    data = Object.assign({}, data, {IDDL: [value]});
  }

  // populate the ID and DL objects based on what is in the updated IDDL array
  if(getDL({cardType: data})){
    data.DL = {
      isApplying: true,
      action: data.cardAction
    };
  } else {
    data.DL = blankState.DL;
  }

  if(getID({cardType: data})) {
    data.ID = {
      isApplying: true,
      action: data.cardAction
    }
  } else {
    data.ID = blankState.ID;
  }
  return data;
};

export default IDDL;