'use strict';

const reduceByCardType = (action, state, type) => {
  let data = Object.assign({}, state);
  let splitName = action.payload.name.split('-');

  if (splitName[0] === type){
    let name = splitName[1];
    data[name] = action.payload.value;
  };

  return data;
};

export default reduceByCardType;
