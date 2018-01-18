'use strict';

import React from 'react';

import { updateVeteranService }   from '../../actions/index';
import * as dataPresent           from '../../helpers/data-present';
import connectForm                from '../../helpers/connect-form';
import handlers                   from '../../helpers/handlers';
import Presentation               from '../../presentations/apply/veterans-service-page.jsx';
import { VeteransValidator }      from '../../helpers/validations';

const Page = (props) => {
  let validations       = new VeteransValidator(props, props.validations);
  let onSubmit          = handlers.navigateOrShowErrors('veterans', props, validations)
  let onBack            = handlers.navigateOnBack(props);

  return (
    <Presentation
      {...props}
      onSubmit          = { onSubmit }
      onBack            = { onBack }
      validations       = { validations }
      onBlur            = { props.onBlurValidate }
      onFocus           = { props.onFocusClearValidation }
    />
  );
};

function mapStateToProps(state) {
  return {
    veteransService: state.application.veteransService,
    legalName:       state.application.legalName,
    cardType:        state.application.cardType,
    cardAction:      state.application.cardAction,
    focused:         state.ui.focus,
    validations:     state.ui.validations
  };
};

export default connectForm(mapStateToProps, updateVeteranService, Page);
