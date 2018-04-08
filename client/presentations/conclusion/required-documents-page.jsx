'use strict'
import React                      from 'react';
import HomeLink                   from '../home-link.jsx';

import Page                       from '../../containers/page.jsx';
import {
  CaliforniaResidencyDocuments,
  MedicalDocuments,
  RealIdDocuments,
  SocialSecurityDocuments,
  VeteransDocuments,
  YouthDocuments,
  ReducedFee,
  BulletList
} from './documents/index.js';
import Translator         from '../../i18n/translator-tag.jsx';

const Presentation = (props) => {
  let documentList = [
    <RealIdDocuments {...props} key='real-id'/>,
    <SocialSecurityDocuments socialSecurity={props.socialSecurity} key='social-security'/>,
    <CaliforniaResidencyDocuments key='ca-residency'/>,
    <VeteransDocuments veteransService={props.veteransService} key='proof-veteran-services'/>,
    <MedicalDocuments medicalHistory={props.medicalHistory} key='medical-information'/>,
    <ReducedFee reducedFee={props.reducedFee} key='reduced-fee-documents'/>,
    <YouthDocuments dateOfBirth={props.dateOfBirth} licenseIssued={props.licenseAndIdHistory.isIssued} key='youth-documents' />
  ];

  return (
    <Page
      {...props}
    >
      <div className='required-documents'>
        <Translator
          tag             = 'h3'
          translationPath = 'newApproved.requiredDocuments.prompt'
        />
        <Translator
          tag             = 'p'
          translationPath = 'newApproved.requiredDocuments.explanation'
        />

        <Translator
          tag             = 'h4'
          translationPath = 'newApproved.requiredDocuments.documentListHeader'
        />
        <BulletList
          socialSecurity      = { props.socialSecurity }
          veteransService     = { props.veteransService }
          medicalHistory      = { props.medicalHistory }
          realID              = { props.realID }
          dateOfBirth         = { props.dateOfBirth }
          licenseIssued       = { props.licenseAndIdHistory.isIssued }
          reducedFee          = { props.reducedFee }
          IDApp               = { props.IDApp }
          DLApp               = { props.DLApp }
        />

          { documentList }
        <hr></hr>

        <Translator
          tag             = 'p'
          translationPath = 'newApproved.requiredDocuments.additionalInformation.questions'
        />
        <Translator
          tag             = 'p'
          translationPath = 'newApproved.requiredDocuments.additionalInformation.telephone'
        />
        <Translator
          tag             = 'p'
          translationPath = 'newApproved.requiredDocuments.additionalInformation.hearing'
        />
        <Translator
          tag             = 'p'
          translationPath = 'newApproved.requiredDocuments.additionalInformation.callCenter'
        />
      </div>
    </Page>
  );
};

export default Presentation;
