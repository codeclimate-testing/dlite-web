'use strict';

import React from 'react';

import { updateVeteranService }   from '../../actions/index';
import VeteransQuestionnaire      from '../../presentations/apply/veterans-questionnaire-form.jsx';
import VeteransBenefits           from '../../presentations/apply/veterans-benefits-form.jsx';
import VeteransIdentifier         from '../../presentations/apply/veterans-identifier-form.jsx';
import ContinueButton             from '../../presentations/continue-button.jsx';
import BackButton                 from '../../presentations/back-button.jsx';
import connectForm                from '../../helpers/connect-form';
import navigateOnSubmit           from '../../helpers/navigate-on-submit';
import navigateOnBack             from '../../helpers/navigate-on-back';
import * as dataPresent           from '../../helpers/data-present';

const ConnectedForm = (props) => {
  let onSubmit          = navigateOnSubmit('/organ-donation', props);
  let onBack            = navigateOnBack('/my-history/license-issues', props);
  let continueDisabled  = !(dataPresent.veteransService(props.veteransService));
  let pageTitle         = "DMV: License application - My History";

  let content = [];

  content.push(
    <VeteransQuestionnaire
      pageTitle     = { pageTitle }
      onChange      = { props.onChange }
      selectedValue = { props.veteransService.isVeteran }
      key           = 'veterans-service-questionnaire'
    />
  );

  if( props.veteransService.isVeteran === 'Yes'){
    content.push(
      <VeteransBenefits
        firstName     = { props.legalName.firstName }
        onChange      = { props.onChange }
        selectedValue = { props.veteransService.receiveBenefits }
        key           = 'veterans-service-benefits'
      />
    );
    content.push(
      <VeteransIdentifier
        onChange      = { props.onChange }
        selectedValue = { props.veteransService.veteransIdentifier }
        key           = 'veterans-service-identifier'
      />
    );
  }

  if( props.veteransService.isVeteran === 'No') {
    continueDisabled  = false;
  }

  content.push(<ContinueButton disabled={continueDisabled} key = 'continue-button' />);
  content.push(<BackButton onBack={onBack} key = 'back-button' />);


  return (
    <form onSubmit={onSubmit}>
      { content }
    </form>
  );
};

function mapStateToProps(state) {
  return {
    veteransService: state.application.veteransService,
    legalName: state.application.legalName
  };
}

export default connectForm(mapStateToProps, updateVeteranService, ConnectedForm);
