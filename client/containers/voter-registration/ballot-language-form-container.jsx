'use strict';

import React                    from 'react';
import connectForm              from '../../helpers/connect-form';

import { updateBallotLanguage } from '../../actions/index';
import BallotLanguageForm       from '../../presentations/voter-registration/ballot-language/ballot-language-form.jsx';
import BallotLanguageFormPreReg from '../../presentations/voter-registration/ballot-language/ballot-language-prereg-form.jsx';
import handlers                 from '../../helpers/handlers';

import { isPreregistering } from '../../helpers/calculate-age';

const Page = (props) => {
  let onSubmit          = handlers.navigateOnSubmit('/voting-registration/vote-by-mail', props);
  let onBack            = handlers.navigateOnBack(props);
  let continueDisabled  = false;

  const Presentation = isPreregistering(props.dateOfBirth) ? BallotLanguageFormPreReg : BallotLanguageForm;

  return (
    <Presentation
      {...props}
      onSubmit         ={ onSubmit }
      onBack           ={ onBack }
      onChange         ={ props.onChange }
      selectedValue    ={ props.ballotLanguage }
      continueDisabled ={ continueDisabled }
    />
  );
};

const mapStateToProps = (state) => {
  return {
    ballotLanguage: state.application.ballotLanguage,
    dateOfBirth:  state.application.dateOfBirth,
    focused:      state.ui.focus
  };
};

export default connectForm(mapStateToProps, updateBallotLanguage, Page);

