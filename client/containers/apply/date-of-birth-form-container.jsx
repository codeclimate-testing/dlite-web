'use strict';

import React from 'react';

import { updateDateOfBirth }  from "../../actions/index";
import Form                   from "../../presentations/apply/date-of-birth-form.jsx";
import connectForm            from '../../helpers/connect-form';
import navigateOnSubmit       from '../../helpers/navigate-on-submit';
import navigateOnBack         from '../../helpers/navigate-on-back';
import * as dataPresent       from '../../helpers/data-present';

const ConnectedForm = (props) => {
  let onSubmit          =   navigateOnSubmit('/what-do-you-want-to-do-today', props);
  let onBack            =   navigateOnBack(props);
  let continueDisabled  =   !(dataPresent.date(props.dateOfBirth));

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
    dateOfBirth:  state.application.dateOfBirth
  };
}

export default connectForm(mapStateToProps, updateDateOfBirth, ConnectedForm);