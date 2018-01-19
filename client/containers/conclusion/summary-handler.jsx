'use strict';

import React, { Component } from 'react';
import { connect }          from 'react-redux';
import { Link }             from 'react-router-dom';
import Presentation         from '../../presentations/conclusion/summary-page.jsx';
import navigateOnSubmit     from '../../helpers/handlers/navigate-on-submit';
import { postData }         from '../../actions/api-actions';

const Page = props =>{
  let onSubmit            = navigateOnSubmit('/appointment-preparation', props);
  return (
    <Presentation 
      {...props}
      onSubmit            = { onSubmit }
    />
  );
};

function mapStateToProps(state) {
  return state;
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { application }   = stateProps;
  const { dispatch }      = dispatchProps;

  return Object.assign({}, ownProps, {
    state: application,
    onSubmit: () => {
      dispatch(postData(application));
    }
  });
};

export default connect(mapStateToProps, null, mergeProps)(Page);