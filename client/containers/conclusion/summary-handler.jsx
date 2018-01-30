'use strict';

import React, { Component } from 'react';
import { connect }          from 'react-redux';
import { Link }             from 'react-router-dom';
import Presentation         from '../../presentations/conclusion/summary-page.jsx';
import { postData }         from '../../actions/api-actions';
import alicePath            from '../../helpers/alice-path';

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
        () => {
          if(server.apiStatus === 'success') {
            return ownProps.history.push(alicePath('/appointment-preparation'));
          }

          return ownProps.history.push(alicePath('/summary'));
        }
      );

    }
  });
};

export default connect(mapStateToProps, null, mergeProps)(Page);