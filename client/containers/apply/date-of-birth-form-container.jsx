'use strict';

import React from 'react';

import { updateDateOfBirth }  from "../../actions/index";
import Form                   from "../../presentations/apply/date-of-birth-form.jsx";
import connectForm            from '../../helpers/connect-form';
import navigateOnSubmit       from '../../helpers/navigate-on-submit';
import * as dataPresent       from '../../helpers/data-present';

const ConnectedForm = (props) => {
  let onSubmit          =   navigateOnSubmit('/about-me/address', props);
  let continueDisabled  =   !(dataPresent.date(props.dateOfBirth));
  let pageTitle         =   'About me: Date of birth';

  return (
    <Form
      pageTitle         = { pageTitle }
      onSubmit          = { onSubmit }
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
