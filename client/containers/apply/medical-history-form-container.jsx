'use strict';

import React                      from 'react';
import { updateMedicalHistory }   from '../../actions/index';
import * as dataPresent           from '../../helpers/data-present';
import connectForm                from '../../helpers/connect-form';
import handlers                   from '../../helpers/handlers';
import Presentation               from '../../presentations/apply/medical-history-page.jsx';

const Page = (props) => {
  let continueDisabled            = !(dataPresent.hasMedicalCondition(props.medicalHistory))
  let showEnterMedicalCondition   = false
  let onSubmit                    = handlers.navigateOnSubmit('/my-history/license-and-id', props);
  let onBack                      = handlers.navigateOnBack(props);

  return (
    <Presentation
      {...props}
      onSubmit          = { onSubmit }
      onBack            = { onBack }
      continueDisabled  = { continueDisabled }
    />
  );
};

function mapStateToProps(state) {
  return {
    medicalHistory: state.application.medicalHistory,
    focused: state.ui.focus
  };
};

export default connectForm(mapStateToProps, updateMedicalHistory, Page);

