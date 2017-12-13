'use strict';

import React from 'react';

import { updateDateOfBirth }         from '../../actions/index';
import VoterPreferencesIntro         from '../../presentations/voter/voter-preferences-intro-form.jsx';
import PreRegVoterPreferencesIntro   from '../../presentations/voter/voter-preferences-info-prereg-form.jsx';
import connectForm                   from '../../helpers/connect-form';
import { isPreregistering }          from '../../helpers/calculate-age';

const ConnectedForm = (props) => {
  let content = [];

  if (isPreregistering(props.dateOfBirth)) {
    content.push(
      <PreRegVoterPreferencesIntro
      key='Voting Pre-registration Preferences info'
      optOut={props.optOut}/>
    );
  } else {
    content.push(
       <VoterPreferencesIntro
       key='Voting Registration Preferences info'
       optOut={props.optOut} />
    );
  }

  return (
    <div>{content}</div>
  );
};

function mapStateToProps(state) {
  return {
    optOut: state.application.optOut,
    dateOfBirth:  state.application.dateOfBirth
  };
}

export default connectForm(mapStateToProps, updateDateOfBirth, ConnectedForm);
