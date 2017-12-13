'use strict';

import { connect } from 'react-redux';

import onInputChange from './on-input-change';
import onSubmit      from './on-form-submit';

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
