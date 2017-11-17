'use strict';

import React from 'react';

import { updateSocialSecurity }      from "../../actions/index";
import HomeLink                      from '../../presentations/home-link.jsx';
import RequiredDocumentsWithSSN      from "../../presentations/required-documents-info-with-ssn.jsx";

import RequiredDocumentsWithoutSSN   from "../../presentations/required-documents-info-without-ssn.jsx";
import connectForm                   from '../../helpers/connect-form';

const ConnectedForm = (props) => {
  const documentsLink = '/appointment-preparation/documents';
  const appointmentLink = "https://www.dmv.ca.gov/portal/dmv/dmv/onlinesvcs/appointment";

  if(props.socialSecurity.hasSocialSecurity === 'Yes') {
    return (
      <div>
      <HomeLink />

      <RequiredDocumentsWithSSN
      />

      </div>
    );
  }

  return (
    <div>
    <HomeLink />

    <RequiredDocumentsWithoutSSN
    />

    </div>
  );
};

function mapStateToProps(state) {
  return {
    socialSecurity: state.application.socialSecurity
  };
}

export default connectForm(mapStateToProps, updateSocialSecurity, ConnectedForm);
