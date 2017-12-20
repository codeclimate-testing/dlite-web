'use strict';

import React from 'react';
import { connect } from 'react-redux';

import handlers             from '../../helpers/handlers';
import * as dataPresent     from '../../helpers/data-present';

import Presentation           from "../../presentations/intro/reduced-fee-page.jsx";
import { updateReducedFee }   from "../../actions/index";

const Page = (props) => {
  let onSubmit          =   handlers.navigateOnSubmit('/get-started', props);
  let onBack            =   handlers.navigateOnBack(props);
  let continueDisabled  =   !dataPresent.reducedFee(props.reducedFee);

  return (
    <Presentation
      {...props}
      onSubmit          = { onSubmit }
      onBack            = { onBack }
      continueDisabled  = { continueDisabled }
    />
  );
};

const mapStateToProps = (state) => {
  return {
    reducedFee:   state.application.reducedFee,
    cardType:     state.application.cardType
  };
};

const mapDispatchToProps = (dispatch) => {
  const onChange   = handlers.onInputChange(updateReducedFee, dispatch);
  const onSubmit   = handlers.onFormSubmit;

  return {
    onChange,
    onSubmit
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);
