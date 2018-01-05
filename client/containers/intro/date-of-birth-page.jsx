'use strict';

import React from 'react';
import connectForm            from '../../helpers/connect-form';

import handlers               from '../../helpers/handlers';
import * as dataPresent       from '../../helpers/data-present';

import Presentation           from "../../presentations/intro/date-of-birth-page.jsx";
import { updateDateOfBirth }  from "../../actions/index";

const Page = (props) => {
  let continueDisabled  =   !dataPresent.date(props.dateOfBirth);
  let onSubmit          =   handlers.navigateOnSubmit('/what-do-you-want-to-do-today', props);
  let onBack            =   handlers.navigateOnBack(props);

  return (
    <Presentation
      {...props}
      onSubmit          = { onSubmit }
      onBack            = { onBack }
      continueDisabled  = { continueDisabled }
    />
  );
};

const mapStateToProps = (state) => {
  return {
    dateOfBirth:  state.application.dateOfBirth
  };
};

export default connectForm(mapStateToProps, updateDateOfBirth, Page);