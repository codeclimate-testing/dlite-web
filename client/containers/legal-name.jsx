'use strict';

import React, {PropTypes} from 'react';
import {Link} from 'react-router-dom';
import {connect} from "react-redux";
// import {bindActionCreators} from "redux";

import {updateLegalName} from "../actions/index";
import LegalNameForm from "../presentations/name-form.jsx";

const LegalName = (props) => {
  return (
    <LegalNameForm onSubmit={props.onSubmit} onChange={props.onChange} legalName={props.legalName} />
  );
};

function mapStateToProps(state) {
  return {legalName: state.legalName};
}

function mapDispatchToProps(dispatch) {
  function onChange(event) {
    let target  = event.target;
    let nameType = target.getAttribute('name');
    let value = target.value;
    dispatch(updateLegalName(nameType, value));
  }

  function onSubmit(event) {
    event.preventDefault()
    // no-op, right now
    // might change the route in the future
  }

  return {
    onSubmit,
    onChange
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LegalName);
