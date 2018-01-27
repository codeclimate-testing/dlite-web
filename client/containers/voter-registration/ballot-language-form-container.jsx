'use strict';

import React                      from 'react';
import connectForm                from '../../helpers/connect-form';

import { updateBallotLanguage }   from '../../actions/index';
import Presentation               from '../../presentations/voter-registration/ballot-language-page.jsx';
import handlers                   from '../../helpers/handlers';
import { checkPreReg }            from '../../helpers/data/youth';
import { BallotLanguageValidator} from '../../helpers/validations';

const Page = (props) => {
  let validations       = new BallotLanguageValidator(props.ballotLanguage, props.validations);
  let onSubmit          = handlers.navigateOrShowErrors('chooseBallotLanguage', props, validations);
  let onBack            = handlers.navigateOnBack(props, validations);

  let prereg = checkPreReg(props.dateOfBirth);

  return (
    <Presentation
      {...props}
      onSubmit        = { onSubmit }
      onBack          = { onBack }
      selectedValue   = { props.ballotLanguage }
      validations     = { validations }
      prereg          = { prereg }
    />
  );
};

const mapStateToProps = (state) => {
  return {
    ballotLanguage  : state.application.language.ballotLanguage,
    dateOfBirth     : state.application.dateOfBirth,
    focused         : state.ui.focus,
    validations     : state.ui.validations
  };
};

export default connectForm(mapStateToProps, updateBallotLanguage, Page);

