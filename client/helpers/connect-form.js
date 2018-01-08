'use strict';

import { connect }  from 'react-redux';
import handlers     from './handlers';

function connectForm(mapStateToProps, action, form) {
  function mapDispatchToProps(dispatch) {
    const onChange = handlers.onInputChange(action, dispatch);
    const onSubmit = handlers.onFormSubmit(dispatch);
    const onBlur   = handlers.onBlur(dispatch);
    const onFocus  = handlers.onFocus(dispatch);
    const onBlurValidate = handlers.onBlurValidate(dispatch);
    const onFocusClearValidation = handlers.onFocusClearValidation(dispatch);
    const onSubmitShowErrors = handlers.onSubmitShowErrors(dispatch);

    return {
      onSubmit,
      onChange,
      onBlur,
      onFocus,
      onBlurValidate,
      onFocusClearValidation,
      onSubmitShowErrors
    };
  }

  return connect(mapStateToProps, mapDispatchToProps)(form);
}

export default connectForm;
