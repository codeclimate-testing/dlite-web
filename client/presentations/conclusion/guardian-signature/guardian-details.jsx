'use strict';

import React from 'react';

import ElectronicSignature    from './guardian-electronic-signature.jsx';
import GuardianContact        from './guardian-contact.jsx';
import Accordion              from '../../../containers/accordion.jsx';
import MessageBox             from '../../message-box.jsx';
import {
  guardianHasValue,
  guardianSigned
}     from '../../../helpers/data/youth';

const validationsFor = (props, i) => {
  const signature = {
    date: {
      month: props.validations[`month_${i}`](),
      day: props.validations[`day_${i}`](),
      year: props.validations[`year_${i}`]()
    },
    acceptLiabilities: props.validations[`acceptLiabilities_${i}`](),
    name: props.validations[`name_${i}`]()
  };

  const contact = props.validations[`phoneNumber_${i}`]();

  return {
    signature,
    contact
  };
};

const GuardianDetail = (props) => {
  const validations = validationsFor(props, props.guardianID);

  return(
    <div>
      <hr/>
      <h2 className='question'>For the parent/guardian to complete:</h2>
      <ElectronicSignature
        {...props}
        onChange    = {props.onSignatureFirstChange}
        validations = {validations.signature}
      />
      <GuardianContact
        {...props}
        onChange    = {props.onContactDetailsFirstChange}
        phoneNumber = {validations.contact}
      />
    </div>
  );
};

const SignatureDetails = (props) => {
  if (!guardianHasValue(props)) { return null; }
//TODO: Translation key
  return (
    <div className='guardian-details-form'>
      <GuardianDetail
        guardianID={0}
        {...props}
      />
      <Accordion
        id    = 'guardian-signature-add'
        title = 'Add another parent/guardian signature'
      >
        <GuardianDetail
          guardianID={1}
          {...props}
        />
      </Accordion>
    </div>
  );
}

export default SignatureDetails;
