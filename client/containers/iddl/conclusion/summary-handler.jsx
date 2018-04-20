'use strict';

import React                    from 'react';
import { connect }              from 'react-redux';
import Presentation             from '../../../presentations/conclusion/summary-page.jsx';
import { saveApplication }      from '../../../helpers/handlers/save-application';

const Page = (props) => {
  return (
    <Presentation
      {...props}
    />
  );
};

function mapStateToProps(state) {
  let application = state.application;
  let server = state.server;
  return {
    application,
    server
  }
};

function mapDispatchToProps(dispatch){
  const onSubmit = saveApplication(dispatch);
  return {
    onSubmit
  };
};

function mergeProps(stateProps, dispatchProps, ownProps) {
  let props = Object.assign({}, ...[stateProps, ownProps]);
  props.onSubmit = dispatchProps.onSubmit(props, 'application', ownProps.location.pathname);

  return props;
};

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Page);