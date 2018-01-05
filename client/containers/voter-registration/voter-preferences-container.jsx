'use strict';

import React                        from 'react';

import VoterPreferencesIntro        from '../../presentations/voter-registration/voter-preferences-intro-form.jsx';
import PreRegVoterPreferencesIntro  from '../../presentations/voter-registration/voter-preferences-info-prereg-form.jsx';
import connectForm                  from '../../helpers/connect-form';
import { isPreregistering }         from '../../helpers/calculate-age';

const Page = (props) => {

  const Presentation = isPreregistering(props.dateOfBirth) ? PreRegVoterPreferencesIntro : VoterPreferencesIntro;
  
  return (
    <Presentation
      {...props}
    />
  );
};

function mapStateToProps(state) {
  return {
    optOut        : state.application.optOut,
    dateOfBirth   : state.application.dateOfBirth,
    focused       : state.ui.focus
  };
};

export default connectForm(mapStateToProps, null, Page);