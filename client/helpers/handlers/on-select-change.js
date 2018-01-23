'use strict';

export default function onChangeGenerator(action, dispatch) {
  return function onChange(event) {
    let value = event.target.getAttribute('value');
    let name = event.target.getAttribute('name');
    dispatch(action(name, value));
  };
}

