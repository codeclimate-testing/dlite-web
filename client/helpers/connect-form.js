'use strict';

import { connect } from 'react-redux';

import onInputChange from './handlers/on-input-change';
import onSubmit      from './handlers/on-form-submit';

function connectForm(mapStateToProps, action, form) {
  function mapDispatchToProps(dispatch) {
    const onChange = onInputChange(action, dispatch);
    return {
      onSubmit,
      onChange
    };
  }

  return connect(mapStateToProps, mapDispatchToProps)(form);
}

export default connectForm;
