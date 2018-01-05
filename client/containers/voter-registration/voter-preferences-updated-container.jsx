'use strict';

import React                              from 'react';
import VoterPreferencesIntroUpdated       from '../../presentations/voter-registration/voter-preferences-intro-updated-form.jsx';
import PreRegVoterPreferencesIntroUpdated from '../../presentations/voter-registration/voter-preferences-info-prereg-updated-form.jsx';
import connectForm                        from '../../helpers/connect-form';
import { isPreregistering }               from '../../helpers/calculate-age';

const Page = (props) => {
  const formPageTitle   = pageTitle(props.dateOfBirth);
  const formSectionName = sectionName(props.dateOfBirth);

  const Presentation    = isPreregistering(props.dateOfBirth) ? PreRegVoterPreferencesIntroUpdated : VoterPreferencesIntroUpdated;
  
  return (
    <Presentation
      {...props}
    />
  );
};

function mapStateToProps(state) {
  return {
    dateOfBirth: state.application.dateOfBirth,
    optOut: state.application.optOut,
    focused:state.ui.focus
  };
}

export default connectForm(mapStateToProps, null, Page);
