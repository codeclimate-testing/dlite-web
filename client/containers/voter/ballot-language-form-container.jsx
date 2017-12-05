'use strict';

import React from 'react';

import { updateBallotLanguage }       from '../../actions/index';
import Form                           from '../../presentations/voter/ballot-language-form.jsx';
import connectForm                    from '../../helpers/connect-form';
import navigateOnSubmit               from '../../helpers/navigate-on-submit';
import navigateOnBack                 from '../../helpers/navigate-on-back';

const ConnectedForm = (props) => {
  const continueDisabled = false;
  const onSubmit = navigateOnSubmit('/voting-registration/vote-by-mail', props);
  const onBack = navigateOnBack('/voting-registration/choose-party', props);

  return (
    <Form
      onSubmit={onSubmit}
      onBack={onBack}
      onChange={props.onChange}
      selectedValue={props.ballotLanguage}
      continueDisabled={continueDisabled}
      dateOfBirth={props.dateOfBirth}
      
    />
  );
};

function mapStateToProps(state) {
  return {
    ballotLanguage: state.application.ballotLanguage,
    dateOfBirth: state.application.dateOfBirth
  };
}

export default connectForm(mapStateToProps, updateBallotLanguage, ConnectedForm);
