'use strict';

import React from 'react';

import { updateSocialSecurity }      from '../../actions/index';
import HomeLink                      from '../../presentations/home-link.jsx';
import RequiredDocuments             from '../../presentations/apply/required-documents-info.jsx';
import connectForm                   from '../../helpers/connect-form';

const ConnectedForm = (props) => {

  return (
    <div>
      <HomeLink />

      <RequiredDocuments
        socialSecurity     = { props.socialSecurity }
        veteransService    = { props.veteransService }
        medicalHistory     = { props.medicalHistory }
      />
    </div>
  );

};

function mapStateToProps(state) {
  return {
    socialSecurity:   state.application.socialSecurity,
    veteransService:  state.application.veteransService,
    medicalHistory:  state.application.medicalHistory
  };
}

export default connectForm(mapStateToProps, updateSocialSecurity, ConnectedForm);
