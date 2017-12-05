'use strict';

import React from 'react';

import { updateDateOfBirth }  from "../../actions/index";
import Form                   from "../../presentations/apply/date-of-birth-form.jsx";
import connectForm            from '../../helpers/connect-form';
import navigateOnSubmit       from '../../helpers/navigate-on-submit';
import navigateOnBack         from '../../helpers/navigate-on-back';
import * as dataPresent       from '../../helpers/data-present';
import calculateAge           from '../../helpers/calculate-age';

const ConnectedForm = (props) => {
  let onSubmit          =   navigateOnSubmit('/real-id', props);
  let onBack            =   navigateOnBack('/my-basics/legal-name', props);
  let continueDisabled  =   !(dataPresent.date(props.dateOfBirth));

  props.dateOfBirth.age = calculateAge(props.dateOfBirth.year, props.dateOfBirth.month, props.dateOfBirth.day)
  console.log(props.dateOfBirth.age);
  return (
    <Form
      onSubmit          = { onSubmit }
      onBack            = { onBack }
      onChange          = { props.onChange }
      dateOfBirth       = { props.dateOfBirth }
      continueDisabled  = { continueDisabled }
    />
  );
};

function mapStateToProps(state) {
  return {
    dateOfBirth: state.application.dateOfBirth
  };
}

export default connectForm(mapStateToProps, updateDateOfBirth, ConnectedForm);