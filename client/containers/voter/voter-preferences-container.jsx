'use strict';

import React from 'react';

import { updateDateOfBirth }     from '../../actions/index';
import VoterPreferencesIntro     from '../../presentations/voter/voter-preferences-intro-form.jsx';
import connectForm               from '../../helpers/connect-form';

const ConnectedForm = (props) => {

  return (
    <div>
      <VoterPreferencesIntro
        dateOfBirth = { props.dateOfBirth }
        optOut = { props.optOut }
      />
    </div>
  );
};

function mapStateToProps(state) {
  return {
    dateOfBirth: state.application.dateOfBirth,
    optOut: state.application.optOut
  };
}

export default connectForm(mapStateToProps, updateDateOfBirth, ConnectedForm);
