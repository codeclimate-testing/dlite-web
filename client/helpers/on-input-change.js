'use strict';

export default function onChangeGenerator(action, dispatch) {
  return function onChange(event) {
    let target  = event.target;
    let name = target.getAttribute('name');
    let value = target.value;
    dispatch(action(name, value));
  };
};
