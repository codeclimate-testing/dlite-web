'use strict';

import React from 'react';

import { updateWeight }  from "../actions/index";
import FormPresentation  from "../presentations/weight-form.jsx";
import connectForm       from '../helpers/connect-form';
import navigateOnSubmit  from '../helpers/navigate-on-submit';
import * as dataPresent  from '../helpers/data-present';

const Form = (props) => {
  const continueDisabled = !dataPresent.value(props.weight);
  const onSubmit = navigateOnSubmit('/about-me/organ', props);

  return (
    <FormPresentation
      onSubmit={onSubmit}
      onChange={props.onChange}
      weight={props.weight}
      continueDisabled={continueDisabled}
    />
  );
};

function mapStateToProps(state) {
  return {
    weight: state.application.weight
  };
}

export default connectForm(mapStateToProps, updateWeight, Form);
