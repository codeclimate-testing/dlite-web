'use strict';

import React from 'react';

import { updateWeight }  from "../../actions/index";
import FormPresentation  from "../../presentations/apply/weight-form.jsx";
import connectForm       from '../../helpers/connect-form';
import navigateOnSubmit  from '../../helpers/navigate-on-submit';
import * as dataPresent  from '../../helpers/data-present';

const Form = (props) => {
  let continueDisabled  = !dataPresent.value(props.weight);
  let onSubmit          = navigateOnSubmit('/about-me/social-security', props);
  let pageTitle         = 'About me: Weight';

  return (
    <FormPresentation
      pageTitle           = { pageTitle }
      onSubmit            = { onSubmit }
      onChange            = { props.onChange }
      weight              = { props.weight }
      continueDisabled    = { continueDisabled }
    />
  );
};

function mapStateToProps(state) {
  return {
    weight: state.application.weight
  };
}

export default connectForm(mapStateToProps, updateWeight, Form);
