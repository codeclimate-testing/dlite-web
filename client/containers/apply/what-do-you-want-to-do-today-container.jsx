'use strict';

import React from 'react';
import { connect } from "react-redux";


import {
  updateCardType
} from "../../actions/index";


import Page                   from "../../presentations/page.jsx";
import Presentation           from "../../presentations/apply/choose-card-form.jsx";

import navigateOnSubmit       from '../../helpers/navigate-on-submit';
import navigateOnBack         from '../../helpers/navigate-on-back';
import onInputChange          from '../../helpers/on-input-change';
import onFormSubmit           from '../../helpers/on-form-submit';
import {
  onFocusGenerator,
  onBlurGenerator
} from '../../helpers/on-focus-changes';
import { ageChecks, 
    canBeSenior }             from '../../helpers/calculate-age';
import * as dataPresent       from '../../helpers/data-present';

const Form = (props) => {
  let address = '/real-id';
  if(ageChecks.Under15Half(props.dateOfBirth) && props.cardType.DL) {
    address             =   '/youth-license-notification';
  } else if (canBeSenior(props.dateOfBirth)) {
    address             =   '/senior-id';
  }

  let onSubmit          =   navigateOnSubmit(address, props);
  let onBack            =   navigateOnBack(props);
  let continueDisabled  =   !(dataPresent.cardType(props.cardType));
  let pageTitle         =   'DMV: License application';

  return (
    <Page
      {...props}
      pageTitle={pageTitle}
      sectionNumber='1'
      sectionName='My basics'
    >
      <Presentation
        {...props}
        onSubmit          = { onSubmit }
        onBack            = { onBack }
        continueDisabled  = { continueDisabled }
      />
    </Page>
  );
};

function mapStateToProps(state) {
  return {
    cardType:     state.application.cardType,
    dateOfBirth:  state.application.dateOfBirth,
    focused:      state.ui.focus
  };
}

function mapDispatchToProps(dispatch) {
  const onChange = onInputChange(updateCardType, dispatch);
  const onSubmit = onFormSubmit;
  const onBlur   = onBlurGenerator(dispatch);
  const onFocus  = onFocusGenerator(dispatch);

  return {
    onSubmit,
    onChange,
    onBlur,
    onFocus
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);
