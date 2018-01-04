'use strict';

import React                    from 'react';
import { connect }              from 'react-redux';

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

const mapDispatchToProps = (dispatch) => {
  const onChange   = handlers.onInputChange(updateBallotLanguage, dispatch);
  const onSubmit   = handlers.onFormSubmit(dispatch);

  return {
    onChange,
    onSubmit
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);
