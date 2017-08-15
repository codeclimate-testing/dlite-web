'use strict';

import { connect } from "react-redux";

import onInputChange from './on-input-change';
import onSubmit      from './on-form-submit';
import onButtonClick from './on-button-click.js';

function connectForm(mapStateToProps, action, form) {
  function mapDispatchToProps(dispatch) {
    const onChange = onInputChange(action, dispatch);
    const onClick = onButtonClick(action, dispatch);
    return {
      onSubmit,
      onChange,
      onClick
    };
  }

  return connect(mapStateToProps, mapDispatchToProps)(form);
};

export default connectForm;
