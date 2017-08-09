'use strict';

import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import {SummaryEmpty, SummaryNames} from '../presentations/summary-view.jsx';

const SummaryHandler  = (props) => {

  // If no names is available, show an empty summary
  // Later this will be handled as part of html form validations
  if(props.legalName.firstName !== '' ||
      props.legalName.middleName !== '' ||
      props.legalName.lastName !== '') {
    return (<SummaryNames legalName={props.legalName} />);
  }
  else{
    return (<SummaryEmpty />);
  }
}

function mapStateToProps(state) {
  return {legalName: state.legalName};
}

export default connect(mapStateToProps)(SummaryHandler);
