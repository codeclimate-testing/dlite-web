'use strict';

import React from 'react';

import { updateTraitsHeightWeight }  from "../../actions/index";
import FormPresentation  from "../../presentations/apply/traits-height-weight-form.jsx";
import connectForm       from '../../helpers/connect-form';
import navigateOnSubmit  from '../../helpers/navigate-on-submit';
import * as dataPresent  from '../../helpers/data-present';

const Form = (props) => {
  let continueDisabled   = !dataPresent.traitsHeightWeight(props.traitsHeightWeight);
  let onSubmit           = navigateOnSubmit('/about-me/license-history', props);
  let pageTitle          = 'About me: Height and Weight';

  return (
    <FormPresentation
      pageTitle           = { pageTitle }
      onSubmit            = { onSubmit }
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
