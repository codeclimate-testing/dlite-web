'use strict';

import React from 'react';

import { updateDateOfBirth }               from '../../actions/index';
import VoterPreferencesIntroUpdated        from '../../presentations/voter/voter-preferences-intro-updated-form.jsx';
import PreRegVoterPreferencesIntroUpdated  from '../../presentations/voter/voter-preferences-info-prereg-updated-form.jsx';
import connectForm                         from '../../helpers/connect-form';
import { isPreregistering }                from '../../helpers/calculate-age';

const ConnectedForm = (props) => {
  let content = [];

  if (isPreregistering(props.dateOfBirth)) {
    content.push(
      <PreRegVoterPreferencesIntroUpdated key='Voting Pre-registration Preferences info'
        optOut={props.optOut} />
    );
  } else {
    content.push(
      <VoterPreferencesIntroUpdated key='Voting Registration Preferences info'
        optOut={props.optOut} />
    );
  }

  return (
    <div>{content}</div>
  );
};

function mapStateToProps(state) {
  return {
    dateOfBirth: state.application.dateOfBirth,
    optOut: state.application.optOut
  };
}

export default connectForm(mapStateToProps, updateDateOfBirth, ConnectedForm);
