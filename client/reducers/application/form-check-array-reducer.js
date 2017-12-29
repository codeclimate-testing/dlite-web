const formCheckArrayReducer  = (name, value, data, key) => {
  let array = data[key];

  if (value.toString() === 'true') {
    array.push(name);
  } else {
    let index = array.indexOf(name);
    
    if(index > -1) {
      array.splice(index, 1);
    }
  }
  return Object.assign({}, data, {[key]: array});
};

export default formCheckArrayReducer;