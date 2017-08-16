'use strict';

export default function onClickGenerator(action, dispatch) {
  return function onClick(event) {
    let target = event.target;
    let name = target.getAttribute('name');
    let value = target.value;
    dispatch(action(name, value));
  };
};
