'use strict';

import React from 'react';

import ElectronicSignature                  from './guardian-electronic-signature.jsx';
import GuardianContact                      from './guardian-contact.jsx';
import Accordion                            from '../../../containers/accordion.jsx';
import MessageBox                           from '../../message-box.jsx';
import { guardianSignsElectronically }      from '../../../helpers/data/youth';
import Translator                           from '../../../i18n/translator-tag.jsx';

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
      <Translator
        tag             = 'h2'
        className       = 'question'
        translationPath = 'For the parent/guardian to complete:'
      />
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
  if (!guardianSignsElectronically(props)) { return null; }
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
