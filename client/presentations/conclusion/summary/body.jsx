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
  return (
    <div className    = 'summary'>
      <Alerts
        cardType      = {props.application.cardType}
        dateOfBirth   = {props.application.basics.dateOfBirth}
      />
      <IDApp        {...props} />
      <DLApp        {...props} />
      <MyBasics     {...props} />
      <MyHistory    {...props} />
      <OrganDonation {...props} />
      <Voting       {...props} />
    </div>
  )
};

export default Contents;
