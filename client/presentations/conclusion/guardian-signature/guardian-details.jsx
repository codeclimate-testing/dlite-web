'use strict';

import React from 'react';

import ElectronicSignature    from './guardian-electronic-signature.jsx';
import GuardianContact        from './guardian-contact.jsx';
import IdentityDocument       from './guardian-identity-document.jsx';
import Accordion              from '../../../containers/accordion.jsx';
import MessageBox             from '../../message-box.jsx';
import {
  guardianHasValue,
  guardianSigned
}     from '../../../helpers/data/youth';

const SignatureDetails = (props) => {
  if (!guardianHasValue(props)) { return null; }

  if(guardianSigned(props)) {
    return (
      <div className='guardian-details-form'>
        <div>
          <hr/>
          <h2 className='question'>For the parent/guardian to complete:</h2>
          <ElectronicSignature
            {...props}
            guardianID  = {0}
            onChange    = {props.onSignatureFirstChange}
            validations = {{
              date: {
                month: props.validations.month_0(),
                day: props.validations.day_0(),
                year: props.validations.year_0()
              },
              acceptLiabilities: props.validations.acceptLiabilities_0(),
              name: props.validations.name_0()
            }}
          />
          <GuardianContact
            {...props}
            guardianID  = {0}
            onChange    = {props.onContactDetailsFirstChange}
            phoneNumber = {props.validations.phoneNumber_0()}
          />
          <IdentityDocument
            {...props}
            guardianID  = {0}
            onChange    = {props.onIDDocFirstChange}
            validations = {{
              date: {
                month: props.validations.expirationMonth_0(),
                day: props.validations.expirationDay_0(),
                year: props.validations.expirationYear_0(),
              },
              issuedBy: props.validations.issuedBy_0(),
              number: props.validations.number_0()
            }}
          />
        </div>
        <Accordion
            id='guardian-signature-add'
            title='Add another parent/guardian signature'
          >
          <div>
            <hr/>
            <h2 className='question'>For the parent/guardian to complete:</h2>
            <ElectronicSignature
              {...props}
              guardianID = {1}
              onChange={props.onSignatureSecondChange}
              validations = {{
                date: {
                  month: props.validations.month_1(),
                  day: props.validations.day_1(),
                  year: props.validations.year_1()
                },
                acceptLiabilities: null,
                name: props.validations.name_1()
              }}
            />
            <GuardianContact
              {...props}
              guardianID  = {1}
              onChange    = {props.onContactDetailsSecondChange}
              phoneNumber = {props.validations.phoneNumber_1()}
            />
            <IdentityDocument
              {...props}
              guardianID  = {1}
              onChange    = {props.onIDDocSecondChange}
              validations = {{
                date: {
                  month: props.validations.expirationMonth_1(),
                  day: props.validations.expirationDay_1(),
                  year: props.validations.expirationYear_1(),
                },
                issuedBy: props.validations.issuedBy_1(),
                number: props.validations.number_1()
              }}
            />
          </div>
        </Accordion>
      </div>
    )
  }

  return (
    <MessageBox className='info'>
      <div>
        <p>Your application will not be complete until your parent/guardian signs.</p>
      </div>
    </MessageBox>
  )

};

export default SignatureDetails;
