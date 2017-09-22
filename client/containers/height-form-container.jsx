'use strict';

import React from 'react';

import { updateHeight }  from "../actions/index";
import FormPresentation  from "../presentations/height-form.jsx";
import connectForm       from '../helpers/connect-form';
import navigateOnSubmit  from '../helpers/navigate-on-submit';

const Form = (props) => {
  const continueDisabled = !props.height.feet;
  const onSubmit = navigateOnSubmit('/about-me/weight', props);

  return (
    <FormPresentation
      onSubmit={onSubmit}
      onChange={props.onChange}
      height={props.height}
      continueDisabled={continueDisabled}
    />
  );
};

function mapStateToProps(state) {
  return {
    height: state.application.height
  };
}

export default connectForm(mapStateToProps, updateHeight, Form);
