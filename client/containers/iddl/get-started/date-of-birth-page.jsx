'use strict';

import React from 'react';
import connectForm            from '../../../helpers/connect-form';

import handlers               from '../../../helpers/handlers';
import { DOBValidator }       from '../../../helpers/validations';

import Presentation           from "../../../presentations/get-started/date-of-birth-page.jsx";
import { updateDateOfBirth }  from "../../../actions/index";

const Page = (props) => {
  let validations       =   new DOBValidator(props.dateOfBirth, props.validations, 'dateOfBirthMissing');
  let onSubmit          =   handlers.navigateOrShowErrors('dateOfBirth', props, validations);
  let onBack            =   handlers.navigateOnBack(props, validations);

  return (
    <Presentation
      {...props}
      onSubmit          = { onSubmit }
      onBack            = { onBack }
      validations       = { validations }
    />
  );
};

const mapStateToProps = (state) => {
  return {
    dateOfBirth   : state.application.basics.dateOfBirth,
    cardType      : state.application.cardType,
    seniorID      : state.application.IDApp.seniorID,
    youthIDInstead: state.application.youthIDInstead,
    chooseApp     : state.ui.chooseApp,
    validations   : state.ui.validations,
    flow          : state.ui.flow
  };
};

export default connectForm(mapStateToProps, updateDateOfBirth, Page);