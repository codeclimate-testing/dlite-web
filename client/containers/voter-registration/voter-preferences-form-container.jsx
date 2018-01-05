'use strict';

import React                        from 'react';
import connectForm                  from '../../helpers/connect-form';

import { updateDateOfBirth }        from '../../actions/index';
import VoterPreferencesIntro        from '../../presentations/voter-registration//voter-preferences/voter-preferences-intro-form.jsx';
import PreRegVoterPreferencesIntro  from '../../presentations/voter-registration//voter-preferences/voter-preferences-info-prereg-form.jsx';
import handlers                     from '../../helpers/handlers';
import { isPreregistering 
} from '../../helpers/calculate-age';


const Page = (props) => {
  let onSubmit          = handlers.navigateOnSubmit('/voting-registration/choose-party', props);
  let onBack            = handlers.navigateOnBack(props);

  const Presentation = isPreregistering(props.dateOfBirth) ? PreRegVoterPreferencesIntro : VoterPreferencesIntro;
  return (
    <Presentation
      {...props}
      optOut={props.optOut}
      onSubmit={onSubmit}
      onBack={onBack}
      />
  );
};

const mapStateToProps = (state) => {
  return {
    optOut: state.application.optOut,
    dateOfBirth:  state.application.dateOfBirth,
    focused:      state.ui.focus
  };
};

export default connectForm(mapStateToProps, null, Page);