'use strict';
import { connect }                from 'react-redux';
import mapDispatchToProps         from './handlers/map-dispatch-to-props';
import * as onSubmitDispatches    from './on-submit-dispatches';

export const mergePropsGenerator = (mapStateToProps, action, onSubmitFunction, form) => {

  let mergeProps = (stateProps, dispatchProps, ownProps) => {
    const { dispatch }  = dispatchProps;

    let ownAndState = Object.assign({}, ownProps, stateProps);
    let ownAndStateAndDispatch = Object.assign({}, ownAndState, dispatchProps);
    ownAndStateAndDispatch.onSubmit = onSubmitDispatches[onSubmitFunction](stateProps, dispatch, ownProps);
    return ownAndStateAndDispatch;
  };

  return connect(mapStateToProps, mapDispatchToProps(action), mergeProps)(form)
};

export { onSubmitDispatches }

