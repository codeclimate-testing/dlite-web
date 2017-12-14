'use strict';

import React from 'react';

import { updateTraitsHeightWeight }  from "../../actions/index";
import FormPresentation              from "../../presentations/apply/traits-height-weight-form.jsx";
import connectForm                   from '../../helpers/connect-form';
import navigateOnSubmit              from '../../helpers/navigate-on-submit';
import navigateOnBack                from '../../helpers/navigate-on-back';
import * as dataPresent              from '../../helpers/data-present';

const Form = (props) => {
  let continueDisabled   = !dataPresent.traitsHeightWeight(props.traitsHeightWeight);
  let onSubmit           = navigateOnSubmit('/my-basics/social-security', props);
  let onBack             = navigateOnBack(props);

  return (
    <FormPresentation
      onSubmit            = { onSubmit }
      onBack              = { onBack }
      onChange            = { props.onChange }
      traitsHeightWeight  = { props.traitsHeightWeight }
      continueDisabled    = { continueDisabled }
    />
  );
};

function mapStateToProps(state) {
  return {
    traitsHeightWeight: state.application.traitsHeightWeight
  };
}

export default connectForm(mapStateToProps, updateTraitsHeightWeight, Form);
