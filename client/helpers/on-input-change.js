'use strict';

export default function onChangeGenerator(action, dispatch) {

  return function onChange(event) {
    let target  = event.target;
    let name = target.getAttribute('name');
    let value = '';

    switch (target.getAttribute('type')) {
      case 'text':
        value = target.value;
        break;

      case 'checkbox':
        value = target.checked;
        break;

      default:
        value = target.value;
    }

    dispatch(action(name, value));
  };
}
