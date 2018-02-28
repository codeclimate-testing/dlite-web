'use strict';
import React                from 'react';
import GuardianSignature    from './guardian-signature.jsx';
import ContinueButton       from '../../continue-button.jsx';
import IDApp                from './id-app.jsx';
import DLApp                from './dl-app.jsx';
import MyBasics             from './my-basics.jsx';
import MyHistory            from './my-history.jsx';
import OrganDonation        from './organ-donation.jsx';
import Voting               from './voting.jsx';
import Alerts               from './alerts.jsx';


const Contents = (props) => {
  let application     = props.application;
  application.locale  = props.locale;
  application.summary = 'summary'
  return (
    <div className    = 'summary'>
      <Alerts
        cardType      = {application.cardType}
        dateOfBirth   = {application.basics.dateOfBirth}
      />
      <IDApp        {...application} />
      <DLApp        {...application} />
      <MyBasics     {...application} />
      <MyHistory    {...application} />
      <OrganDonation {...application} />
      <Voting       {...application} />
    </div>
  )
};

export default Contents;
