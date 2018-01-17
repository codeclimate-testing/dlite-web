'use strict';

import React from 'react';

import ElectronicSignature    from './guardian-electronic-signature.jsx';
import GuardianContact        from './guardian-contact.jsx';
import IdentityDocument       from './guardian-identity-document.jsx';
import Accordion              from '../../../containers/accordion.jsx';
import MessageBox             from '../../message-box.jsx';

const SignatureDetails = (props) => {


  if(props.guardianSignature.isSigned === 'No') {
    return (
      <MessageBox className='info'>
        <div>
          <p>Your application will not be complete until your parent/guardian signs.</p>
        </div>
      </MessageBox>
    )
  }

  if(props.guardianSignature.isSigned === 'Yes') {
    return (
      <div className='guardian-details-form'>
        <div>
          <hr/>
          <h2 className='question'>For the parent/guardian to complete:</h2>
          <ElectronicSignature
            {...props}
            guardianID = {0}
            onChange={props.onFirstChange}
          />
          <GuardianContact
            {...props}
            guardianID = {0}
            onChange={props.onFirstChange}
          />
          <IdentityDocument
            {...props}
            guardianID = {0}
            onChange={props.onFirstChange}
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
              onChange={props.onSecondChange}
            />
            <GuardianContact
              {...props}
              guardianID = {1}
              onChange={props.onSecondChange}
            />
            <IdentityDocument
              {...props}
              guardianID = {1}
              onChange={props.onSecondChange}
            />
          </div>
        </Accordion>
      </div>
    )
  }
  return null;
};

export default SignatureDetails;
