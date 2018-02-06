'use strict';

import React, { Component } from 'react';
import { connect }          from 'react-redux';
import { Link }             from 'react-router-dom';
import Presentation         from '../../presentations/conclusion/summary-page.jsx';
import { postData }         from '../../actions/api-actions';
import { nextPath }         from '../../helpers/data/page';

const Page = props =>{

  return (
    <Presentation {...props} />
  );
};

function mapStateToProps(state) {
  return state;
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { application }   = stateProps;
  const { server }        = stateProps;
  const { dispatch }      = dispatchProps;

  return Object.assign({}, ownProps, {
    application: application,
    server: server,
    onSubmit: (e) => {
      e.preventDefault();
      dispatch(postData(application))
      .then(
        ownProps.history.push(
          nextPath('summary', server)
        )
      );
    }
  });
};

export default connect(mapStateToProps, null, mergeProps)(Page);