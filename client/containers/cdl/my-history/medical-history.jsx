'use strict';

import React                      from 'react';
import { updateCDLMedical }       from '../../../actions/index';
import connectForm                from '../../../helpers/connect-form';
import handlers                   from '../../../helpers/handlers';
import Presentation               from '../../../presentations/cdl/my-history/medical-history-page.jsx';
import { MedicalValidator }       from '../../../helpers/validations';

const Page = (props) => {
  let validations       = new MedicalValidator(props.medicalHistory, props.validations, 'selectionMissing');
  let onSubmit          = handlers.navigateOrShowErrors('cdlMedical', props, validations);
  let onBack            = handlers.navigateOnBack(props, validations);

  return (
    <Presentation
      {...props}
      onSubmit          = { onSubmit }
      onBack            = { onBack }
      validations       = { validations }
    />
  );
};

function mapStateToProps(state) {
  return {
    medicalHistory    : state.cdl.history.medicalHistory,
    cardAction        : state.cdl.cardAction,
    focused           : state.ui.focus,
    validations       : state.ui.validations,
    flow              : state.ui.flow
  };
};

export default connectForm(mapStateToProps, updateCDLMedical, Page);

