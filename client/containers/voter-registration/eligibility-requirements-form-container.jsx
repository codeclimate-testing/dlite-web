'use strict';

import React                              from 'react';
import connectForm                        from '../../helpers/connect-form';
import { updateEligibilityRequirements }  from '../../actions/index';
import handlers                           from '../../helpers/handlers';
import { checkPreReg }                    from '../../helpers/data/youth';
import Presentation                       from '../../presentations/voter-registration/eligibility-requirements-page.jsx';

const Page = (props) => {
  let validations       = {
    isValid: () => true
  };
  let onSubmit          = handlers.navigateOrShowErrors('votingEligibility', props, validations);
  let onBack            = handlers.navigateOnBack(props, validations);

  let prereg = checkPreReg(props.dateOfBirth);

  return (
    <Presentation
      {...props}
      onSubmit  = {onSubmit}
      onBack    = {onBack}
      selectedValue={props.eligibilityRequirements}
      prereg    = {prereg}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    eligibilityRequirements: state.application.eligibilityRequirements,
    dateOfBirth:  state.application.dateOfBirth,
    focused:      state.ui.focus
  };
};

export default connectForm(mapStateToProps, updateEligibilityRequirements, Page);