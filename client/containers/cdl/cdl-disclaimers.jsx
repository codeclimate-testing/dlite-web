'use strict';

import React                              from 'react';
import connectForm                        from '../../helpers/connect-form';

import handlers                           from '../../helpers/handlers';
import { DisclaimersValidator }           from '../../helpers/validations';
import {
  updateCDLDisclaimers
 }     from '../../actions/index';

import Presentation                       from '../../presentations/get-started/disclaimers-page.jsx';

const Page = (props) => {
  let validations = new DisclaimersValidator(props, props.validations);
  let onSubmit    = handlers.navigateOrShowErrors('cdlDisclaimers', props, validations);
  let onBack      = handlers.navigateOnBack(props, validations);

  return <Presentation
    {...props}
    onSubmit    = { onSubmit }
    onBack      = { onBack }
    validations = { validations }
  />;
};

const mapStateToProps = (state) => {
  return {
    disclaimers      : state.cdl.cdlDisclaimers,
    chooseApp        : state.ui.chooseApp,
    focused          : state.ui.focus,
    validations      : state.ui.validations
  };
};

export default connectForm(mapStateToProps, updateCDLDisclaimers, Page);
