'use strict';

import React from 'react';

import { updateMedicalHistory }         from '../../actions/index';
import HomeLink                         from '../../presentations/home-link.jsx';
import SectionHeader                    from '../../presentations/section-header.jsx';
import ContinueButton                   from '../../presentations/continue-button.jsx';
import BackButton                       from '../../presentations/back-button.jsx';
import MedicalCondition                 from '../../presentations/apply/medical-condition-info.jsx';
import EnterMedicalInfo                 from '../../presentations/apply/enter-medical-info.jsx';
import connectForm                      from '../../helpers/connect-form';
import navigateOnSubmit                 from '../../helpers/navigate-on-submit';
import navigateOnBack                   from '../../helpers/navigate-on-back';
import * as dataPresent                 from '../../helpers/data-present';

const ConnectedForm = (props) => {
  let continueDisabled            = !(dataPresent.hasMedicalCondition(props.medicalHistory))
  let showEnterMedicalCondition   = false
  let onSubmit                    = navigateOnSubmit('/my-history/license-and-id', props);
  let onBack                      = navigateOnBack('/my-basics/social-security', props);
  let pageTitle                   = "DMV: License application - My history";

  if(props.medicalHistory.hasMedicalCondition === 'Yes') {
    showEnterMedicalCondition = true;
    continueDisabled  = !(dataPresent.medicalHistory(props.medicalHistory))

  return (
    <div>
      <HomeLink />
      <SectionHeader
        number='2'
        name='My history'
      />

      <form onSubmit={onSubmit}>
       <MedicalCondition
          pageTitle      ={pageTitle}
          onChange      = {props.onChange}
          selectedValue = {props.medicalHistory.hasMedicalCondition}
        />
        <br></br>
        <EnterMedicalInfo
          onChange       = {props.onChange}
          medicalHistory  = {props.medicalHistory}
        />
        <ContinueButton disabled={continueDisabled} />
        <br></br>
        <BackButton onBack={onBack} key = 'back-button' />
      </form>
    </div>
  );
}

  return (
    <div>
      <HomeLink />
      <SectionHeader
        number='2'
        name='My history'
      />

      <form onSubmit={onSubmit}>
        <MedicalCondition
          pageTitle      ={pageTitle}
          onChange      = {props.onChange}
          selectedValue = {props.medicalHistory.hasMedicalCondition}
        />
        <ContinueButton disabled={continueDisabled} />
        <br></br>
        <BackButton onBack={onBack} key = 'back-button' />
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
