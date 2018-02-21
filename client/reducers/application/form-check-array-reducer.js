'use strict';

const formCheckArrayReducer  = (name, value, data) => {
  let array = data[name];

  let splitValue = value.split('-');
  let item = splitValue[0];
  let checked = splitValue[1];

  if (checked.toString() === 'true') {
    array.push(item);
  } else {
    let index = array.indexOf(item);

    if(index > -1) {
      array.splice(index, 1);
    }
  }

  return Object.assign({}, data, {[name]: array});
};

export default formCheckArrayReducer;