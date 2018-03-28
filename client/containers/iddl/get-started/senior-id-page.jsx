'use strict';

import React                  from 'react';
import connectForm            from '../../../helpers/connect-form';

import handlers               from '../../../helpers/handlers';
import { SeniorIDValidator }  from '../../../helpers/validations';

import { updateSeniorID }     from "../../../actions/index";
import Presentation           from "../../../presentations/get-started/senior-id-page.jsx";

const Page = (props) => {

  let validations       =   new SeniorIDValidator(props.seniorID, props.validations);
  let onSubmit          =   handlers.navigateOrShowErrors('seniorID', props, validations);
  let onBack            =   handlers.navigateOnBack(props, validations);

  return (
    <Presentation
      {...props}
      onBack            = { onBack }
      onSubmit          = { onSubmit }
      selectedValue     = { props.seniorID }
      validations       = { validations }
    />
  )
};

const mapStateToProps = (state) => {
  return {
    seniorID            : state.application.IDApp.seniorID,
    reducedFee          : state.application.IDApp.reducedFee,
    licenseAndIdHistory : state.application.history.licenseAndIdHistory,
    focused             : state.ui.focus,
    validations         : state.ui.validations,
    flow                : state.ui.flow
  };
};

export default connectForm(mapStateToProps, updateSeniorID, Page);