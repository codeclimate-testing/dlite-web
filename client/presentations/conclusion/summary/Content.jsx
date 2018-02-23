'use strict';
import React                from 'react';
import GuardianSignature    from './guardian-signature.jsx';
import ContinueButton       from '../../continue-button.jsx';
import IDApp                from './id-app/index.jsx';
import DLApp                from './dl-app/index.jsx';
import MyBasics             from './my-basics/index.jsx';
import MyHistory            from './my-history/index.jsx';
import OrganDonation        from './organ-donation/index.jsx';
import Voting               from './voting/index.jsx';
import SubmitButton         from './Submit-button.jsx';
import Alerts               from './Alerts.jsx';


const Contents = (props) => {
  return (
    <div className = 'summary'>
      <Alerts
        cardType    = {props.application.cardType}
        dateOfBirth = {props.application.basics.dateOfBirth}
      />
      <IDApp {...props} />
      <DLApp {...props} />
      <MyBasics {...props} />
      <MyHistory  {...props} />
      <OrganDonation {...props} />
      <Voting {...props} />
      <SubmitButton
        continueDisabled = { props.continueDisabled }
      />
    </div>
  )
};

export default Contents;
