'use strict';

import React, { Component } from 'react';
import { connect }          from 'react-redux';
import { Link }             from 'react-router-dom';
import Presentation         from '../presentations/summary/summary-page.jsx';
import navigateOnSubmit     from '../helpers/handlers/navigate-on-submit';
import { postData }         from '../actions/api-actions';
import { updateNextAddress} from '../actions';

class Page extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount(props){
    this.props.editMode();
  }

  render(props) {
    let onSubmit            = navigateOnSubmit('/appointment-preparation', this.props);
    return (
      <Presentation 
        {...this.props}
        onSubmit            = { onSubmit }
      />
    );
  }
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
    },
    editMode: () => {
      dispatch(updateNextAddress('true'))
    }
  });
};

export default connect(mapStateToProps, null, mergeProps)(Page);