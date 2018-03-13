'use strict';

import React                      from 'react';
import connectForm                from '../../helpers/connect-form';

import { updateBallotLanguage }   from '../../actions/index';
import Presentation               from '../../presentations/voter-registration/ballot-language-page.jsx';
import handlers                   from '../../helpers/handlers';
import { BallotLanguageValidator} from '../../helpers/validations';

const Page = (props) => {
  let locale            = props.locale;
  let validations       = new BallotLanguageValidator(Object.assign(props.ballotLanguage, {locale}), props.validations);
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
    ballotLanguage  : state.application.voting.ballotLanguage,
    dateOfBirth     : state.application.basics.dateOfBirth,
    focused         : state.ui.focus,
    validations     : state.ui.validations,
    locale          : state.ui.locale,
    flow            : state.ui.flow
  };
};

export default connectForm(mapStateToProps, updateBallotLanguage, Page);

