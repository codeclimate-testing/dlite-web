'use strict';

import React, { Component }     from 'react';
import { connect }              from 'react-redux';
import { Link }                 from 'react-router-dom';
import Presentation             from '../../presentations/conclusion/summary-page.jsx';
import { onSubmitAPI }          from '../../helpers/handlers/on-submit-dispatches';
import {
  mergePropsGenerator,
  onSubmitDispatches
}  from '../../helpers/handlers/merge-props';

const Page = props =>{

  return (
    <Presentation {...props} />
  );
};

function mapStateToProps(state) {
  return state;
};

let mergeProps = mergePropsGenerator(null, onSubmitDispatches.useAPI)

export default connect(mapStateToProps, null, mergeProps)(Page);