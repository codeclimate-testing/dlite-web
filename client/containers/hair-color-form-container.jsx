
'use strict';

import React, {PropTypes} from 'react';
import {Link} from 'react-router-dom';
import {connect} from "react-redux";

import {updateHairColor} from "../actions/index";
import HairColorForm from "../presentations/hair-color-form.jsx";

const HairColor = (props) => {
  return (
    <HairColorForm onSubmit={props.onSubmit} onClick={props.onClick} hairColor={props.hairColor} />
  );
};

function mapStateToProps(state) {
  return {hairColor: state.hairColor};
}

function mapDispatchToProps(dispatch) {
  function onClick(event) {
    let target  = event.target;
    let value = target.value;
    dispatch(updateHairColor(value));
  }

  function onSubmit(event) {
    event.preventDefault()
  }

  return {
    onSubmit,
    onClick
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HairColorForm);