'use strict';

import { connect }          from 'react-redux';
import mapDispatchToProps   from './handlers/map-dispatch-to-props';

function connectForm(mapStateToProps, action, form) {
  return connect(mapStateToProps, mapDispatchToProps(action))(form);
}

export default connectForm;
