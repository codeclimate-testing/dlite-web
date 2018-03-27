'use strict';

import React                              from 'react';
import { updateCDLEligibilityRequirements }  from '../../../actions/index';
import handlers                           from '../../../helpers/handlers';
import Presentation                       from '../../../presentations/voter-registration/eligibility-requirements-page.jsx';
import { mergePropsGenerator }            from '../../../helpers/merge-props';

const Page = (props) => {
  let validations       = { isValid: () => true };
  let onSubmit          = handlers.navigateOrShowErrors('cdlVotingEligibility', props, validations);
  let onBack            = handlers.navigateOnBack(props, validations);

  return (
    <Presentation
      {...props}
      onSubmit      = {onSubmit}
      onBack        = {onBack}
      selectedValue = {props.eligibilityRequirements}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    eligibilityRequirements : state.cdl.voting.eligibilityRequirements,
    dateOfBirth             : state.cdl.basics.dateOfBirth,
    focused                 : state.ui.focus,
    flow                    : state.ui.flow
  };
};

export default mergePropsGenerator(mapStateToProps, updateCDLEligibilityRequirements, 'updateEligibility', Page);
