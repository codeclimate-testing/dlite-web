'use strict';

export default function onChangeGenerator(action, dispatch) {
  return function onChange(event) {
    let target  = event.target;
    let name = target.getAttribute('name');
    let value = target.value;
    if( target.getAttribute('type') === 'checkbox') {
      value = target.checked
    }
    dispatch(action(name, value));
  };
}
