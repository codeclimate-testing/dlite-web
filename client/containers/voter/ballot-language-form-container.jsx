'use strict';

import React from 'react';

import { updateBallotLanguage }             from '../../actions/index';
import Form                           from '../../presentations/voter/ballot-language-form.jsx';
import connectForm                    from '../../helpers/connect-form';
import navigateOnSubmit               from '../../helpers/navigate-on-submit';

const ConnectedForm = (props) => {
  const continueDisabled = false;
  const onSubmit = navigateOnSubmit('/about-me/voter/ballot-by-mail', props);

  return (
    <Form
      onSubmit={onSubmit}
      onChange={props.onChange}
      selectedValue={props.ballotLanguage}
      continueDisabled={continueDisabled}
    />
  );
};

function mapStateToProps(state) {
  return {
    ballotLanguage: state.application.ballotLanguage
  };
}

export default connectForm(mapStateToProps, updateBallotLanguage, ConnectedForm);
