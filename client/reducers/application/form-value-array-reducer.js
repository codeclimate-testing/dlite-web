'use strict';

const formValueArrayReducer = (action, state) => {

  let splitValue = action.payload.value.split('-');
  let array = state;

  if (splitValue[1] && splitValue[1].toString() === 'true') {
    array.push(splitValue[0]);
  } else {
    let index = array.indexOf(splitValue[0]);
    if (index > -1) {
      array.splice(index, 1);
    } else {
      array = [splitValue[0]];
    }
  }

  return array;
};

export default formValueArrayReducer;