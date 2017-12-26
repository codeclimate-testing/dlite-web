'use strict';

import { connect } from 'react-redux';

import onInputChange from './handlers/on-input-change';
import onFormSubmit  from './handlers/on-form-submit-generator';

function connectForm(mapStateToProps, action, form) {
  function mapDispatchToProps(dispatch) {
    const onChange = onInputChange(action, dispatch);
    const onSubmit = onFormSubmit(dispatch);
    return {
      onSubmit,
      onChange
    };
  }

  return connect(mapStateToProps, mapDispatchToProps)(form);
}

export default connectForm;
