'use strict';
import handlers                   from './index';
import * as onSubmitDispatches    from './on-submit-dispatches';

export const mergePropsGenerator = (action, onSubmitFunction) => {
  return (stateProps, dispatchProps, ownProps) => {
    const { dispatch }  = dispatchProps;
    return Object.assign({}, ownProps, {
      onFocus               : handlers.onFocus(dispatch),
      onFocusClearValidation: handlers.onFocusClearValidation(dispatch),
      onBlurValidate        : handlers.onBlurValidate(dispatch),
      onBlur                : handlers.onBlur(dispatch),
      onChange              : handlers.onInputChange(action, dispatch),
      onSubmitShowErrors    : handlers.onSubmitShowErrors(dispatch),
      focused               : stateProps.ui.focused,
      server                : stateProps.server,
      application           : stateProps.application,
      onSubmit              : onSubmitFunction(stateProps, dispatch, ownProps),
      dateOfBirth           : stateProps.application.dateOfBirth,
      history               : ownProps.history
    });
  }
};

export { onSubmitDispatches }