'use strict';

import React                      from 'react';
import { updateMedicalHistory }   from '../../../actions/index';
import * as dataPresent           from '../../../helpers/data-present';
import connectForm                from '../../../helpers/connect-form';
import handlers                   from '../../../helpers/handlers';
import Presentation               from '../../../presentations/my-history/medical-history-page.jsx';
import { MedicalValidator }       from '../../../helpers/validations';

const Page = (props) => {

  let validations       = new MedicalValidator(props.medicalHistory, props.validations, 'selectionMissing');
  let onSubmit          = handlers.navigateOrShowErrors('medicalHistory', props, validations);
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
    medicalHistory    : state.application.history.medicalHistory,
    cardAction        : state.application.cardAction,
    cardType          : state.application.cardType,
    DLApp             : state.application.DLApp,
    focused           : state.ui.focus,
    validations       : state.ui.validations,
    flow              : state.ui.flow
  };
};

export default connectForm(mapStateToProps, updateMedicalHistory, Page);

