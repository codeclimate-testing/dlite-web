'use strict';

import React from 'react';

import { updateMedicalHistory }         from '../../actions/index';
import HomeLink                         from '../../presentations/home-link.jsx';
import NavigationButtons                from '../../presentations/navigation-buttons.jsx';
import MedicalCondition                 from '../../presentations/apply/medical-condition-info.jsx';
import EnterMedicalInfo                 from '../../presentations/apply/enter-medical-info.jsx';
import connectForm                      from '../../helpers/connect-form';
import navigateOnSubmit                 from '../../helpers/handlers/navigate-on-submit';
import navigateOnBack                   from '../../helpers/handlers/navigate-on-back';
import * as dataPresent                 from '../../helpers/data-present';

const ConnectedForm = (props) => {
  let continueDisabled            = !(dataPresent.hasMedicalCondition(props.medicalHistory))
  let showEnterMedicalCondition   = false
  let onSubmit                    = navigateOnSubmit('/my-history/license-and-id', props);
  let onBack                      = navigateOnBack(props);

  if(props.medicalHistory.hasMedicalCondition === 'Yes') {
    showEnterMedicalCondition = true;
    continueDisabled  = !(dataPresent.medicalHistory(props.medicalHistory))

  return (
    <div>
      <form onSubmit={onSubmit}>
       <MedicalCondition
          onChange      = {props.onChange}
          selectedValue = {props.medicalHistory.hasMedicalCondition}
        />
        <br></br>
        <EnterMedicalInfo
          onChange       = {props.onChange}
          medicalHistory  = {props.medicalHistory}
        />
        <NavigationButtons
          continueDisabled={continueDisabled}
          onBack={onBack}
        />
      </form>
    </div>
  );
}

  return (
    <div>
      <form onSubmit={onSubmit}>
        <MedicalCondition
          onChange      = {props.onChange}
          selectedValue = {props.medicalHistory.hasMedicalCondition}
        />
        <NavigationButtons
          continueDisabled={continueDisabled}
          onBack={onBack}
        />
      </form>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    medicalHistory: state.application.medicalHistory
  };
}

export default connectForm(mapStateToProps, updateMedicalHistory, ConnectedForm);
