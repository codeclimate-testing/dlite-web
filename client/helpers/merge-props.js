'use strict';
import { connect }                from 'react-redux';
import handlers                   from './handlers';
import * as onSubmitDispatches    from './on-submit-dispatches';

export const mergePropsGenerator = (mapStateToProps, action, onSubmitFunction, form) => {

  let mapDispatchToProps = (dispatch) => {
    const onChange = handlers.onInputChange(action, dispatch);
    const onSubmit = handlers.onFormSubmit(dispatch);
    const onBlur   = handlers.onBlur(dispatch);
    const onFocus  = handlers.onFocus(dispatch);
    const onBlurValidate = handlers.onBlurValidate(dispatch);
    const onFocusClearValidation = handlers.onFocusClearValidation(dispatch);
    const onSubmitShowErrors = handlers.onSubmitShowErrors(dispatch);
    const onFlowChange  = handlers.onFlowChange(dispatch);

    return {
      onSubmit,
      onChange,
      onBlur,
      onFocus,
      onBlurValidate,
      onFocusClearValidation,
      onSubmitShowErrors,
      dispatch,
      onFlowChange
    };
  };

  let mergeProps = (stateProps, dispatchProps, ownProps) => {
    const { dispatch }  = dispatchProps;

    let ownAndState = Object.assign({}, ownProps, stateProps);
    let ownAndStateAndDispatch = Object.assign({}, ownAndState, dispatchProps);
    ownAndStateAndDispatch.onSubmit = onSubmitDispatches[onSubmitFunction](stateProps, dispatch, ownProps);
    return ownAndStateAndDispatch;
  };

  return connect(mapStateToProps, mapDispatchToProps, mergeProps)(form)
};

export { onSubmitDispatches }

