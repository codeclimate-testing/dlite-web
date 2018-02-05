'use strict';

import React                      from 'react';
import connectForm                from '../../helpers/connect-form';

import { updateLanguage }         from '../../actions/index';
import Presentation               from '../../presentations/voter-registration/ballot-language-page.jsx';
import handlers                   from '../../helpers/handlers';
import { BallotLanguageValidator} from '../../helpers/validations';

const Page = (props) => {
  let validations       = new BallotLanguageValidator(props.ballotLanguage, props.validations);
  let onSubmit          = handlers.navigateOrShowErrors('chooseBallotLanguage', props, validations);
  let onBack            = handlers.navigateOnBack(props, validations);

  return (
    <Presentation
      {...props}
      onSubmit        = { onSubmit }
      onBack          = { onBack }
      selectedValue   = { props.ballotLanguage }
      validations     = { validations }
      name            = 'ballotLanguage'
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

export default connectForm(mapStateToProps, updateLanguage, Page);

