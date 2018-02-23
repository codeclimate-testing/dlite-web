'use strict';



import GuardianSignature           from './guardian-signature.jsx';
import ContinueButton              from '../../continue-button.jsx';


import Accordion            from '../../../containers/accordion.jsx';
import IDApp                from './id-app';
import DLApp                from './dl-app';
import MyBasics             from './my-basics';
import MyHistory            from './my-history';
import Organ                from './organ-donation';
import Voting               from './voting';
import ButtonComponent      from './submit-button.jsx';


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
      <Accordion id='organ-donation-summary' title='Organ donation'>
        <OrganDonation organDonation={application.organDonation} />
      </Accordion>
      <Voting {...props} />
      <ButtonComponent
        continueDisabled = { props.continueDisabled }
      />
    </div>
  )
};

export default Contents;
