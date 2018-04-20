'use strict';

import React                    from 'react';
import { connect }              from 'react-redux';
import Presentation             from '../../presentations/cdl/summary-page.jsx';
import { saveApplication }      from '../../helpers/handlers/save-application';

const Page = (props) =>{

  return (
    <Presentation
      {...props}
    />
  );
};

function mapStateToProps(state) {
  let cdl = state.cdl;
  let server = state.server;
  return {
    cdl,
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
  props.onSubmit = dispatchProps.onSubmit(props, 'cdl', ownProps.location.pathname);

  return props;
};

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Page);
