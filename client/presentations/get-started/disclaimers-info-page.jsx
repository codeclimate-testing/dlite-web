'use strict'

import React        from 'react';
import Translator   from '../../i18n/translator-tag.jsx';

const VoterRegistrationItems = (props) => {
  return (
    <ul className='bullet-list'>
      <Translator
        tag='li'
        translationPath='disclaimers.voterRegistration.bodyBullets.0'
      />
      <Translator
        tag='li'
        translationPath='disclaimers.voterRegistration.bodyBullets.1'
      />
      <Translator
        tag='li'
        translationPath='disclaimers.voterRegistration.bodyBullets.2'
      />
      <Translator
        tag='li'
        translationPath='disclaimers.voterRegistration.bodyBullets.3'
      />
      <Translator
        tag='li'
        translationPath='disclaimers.voterRegistration.bodyBullets.4'
      />
      <Translator
        tag='li'
        translationPath='disclaimers.voterRegistration.bodyBullets.5'
      />
    </ul>
  );
};

const CriminalProsecutionItems = (props) => {
  return (
    <ul className='bullet-list'>
      <Translator
        tag='li'
        translationPath='disclaimers.criminalProsecution.bodyBullets.0'
      />
      <Translator
        tag='li'
        translationPath='disclaimers.criminalProsecution.bodyBullets.1'
      />
    </ul>
  );
};

const FinancialResponsibilityItems = (props) => {
  return (
    <ul className='bullet-list'>
      <Translator
        tag='li'
        translationPath='disclaimers.financialResponsibility.bodyBullets.0'
      />
      <Translator
        tag='li'
        translationPath='disclaimers.financialResponsibility.bodyBullets.1'
      />
    </ul>
  );
};

const PaymentRefundsItems = (props) => {
  return (
    <ul className='bullet-list'>
      <Translator
        tag='li'
        translationPath='disclaimers.paymentRefunds.bodyBullets.0'
      />
      <Translator
        tag='li'
        translationPath='disclaimers.paymentRefunds.bodyBullets.1'
      />
    </ul>
  );
};

const PrivacyItems = (props) => {
  return (
    <ul className='bullet-list'>
      <Translator
        tag='li'
        translationPath='disclaimers.privacy.bodyBullets.0'
      />
      <Translator
        tag='li'
        translationPath='disclaimers.privacy.bodyBullets.1'
      />
      <Translator
        tag='li'
        translationPath='disclaimers.privacy.bodyBullets.2'
      />
      <Translator
        tag='li'
        translationPath='disclaimers.privacy.bodyBullets.3'
      />
      <Translator
        tag='li'
        translationPath='disclaimers.privacy.bodyBullets.4'
      />
      <Translator
        tag='li'
        translationPath='disclaimers.privacy.bodyBullets.5'
      />
      <Translator
        tag='li'
        translationPath='disclaimers.privacy.bodyBullets.6'
      />
      <Translator
        tag='li'
        translationPath='disclaimers.privacy.bodyBullets.7'
      />
      <Translator
        tag='li'
        translationPath='disclaimers.privacy.bodyBullets.8'
      />
    </ul>
  );
};

const CertificationsItems = (props) => {
  return (
    <ul className='bullet-list'>
      <Translator
        tag='li'
        translationPath='disclaimers.certifications.bodyBullets.0'
      />
      <Translator
        tag='li'
        translationPath='disclaimers.certifications.bodyBullets.1'
      />
      <Translator
        tag='li'
        translationPath='disclaimers.certifications.bodyBullets.2'
      />
      <Translator
        tag='li'
        translationPath='disclaimers.certifications.bodyBullets.3'
      />
      <Translator
        tag='li'
        translationPath='disclaimers.certifications.bodyBullets.4'
      />
      <Translator
        tag='li'
        translationPath='disclaimers.certifications.bodyBullets.5'
      />
      <Translator
        tag='li'
        translationPath='disclaimers.certifications.bodyBullets.6'
      />
      <Translator
        tag='li'
        translationPath='disclaimers.certifications.bodyBullets.7'
      />
      <Translator
        tag='li'
        translationPath='disclaimers.certifications.bodyBullets.8'
      />
    </ul>
  );
};

const DisclaimersInfo = (props) => {
  return (

    <div className='scroll-wrapper disclaimers-info'>
      <h3 className='translation-missing'>
        Please take a moment to review the following disclaimers:
        </h3>

      <div className='scroll-content'>

        <Translator
          tag='h3'
          translationPath='disclaimers.medical.title'
        />

        <Translator
          tag='p'
          translationPath='disclaimers.medical.body'
        />

        <Translator
          tag='h3'
          translationPath='disclaimers.veteran.title'
        />

        <Translator
          tag='p'
          translationPath='disclaimers.veteran.body'
        />

        <Translator
          tag='h3'
          translationPath='disclaimers.organDonation.title'
        />

        <Translator
          tag='p'
          translationPath='disclaimers.organDonation.body'
        />

        <Translator
          tag='h3'
          translationPath='disclaimers.voterRegistration.title'
        />

        <VoterRegistrationItems {...props} />

        <Translator
          tag='h3'
          translationPath='disclaimers.criminalProsecution.title'
        />

        <CriminalProsecutionItems {...props} />

        <Translator
          tag='h3'
          translationPath='disclaimers.financialResponsibility.title'
        />

        <FinancialResponsibilityItems {...props} />

        <Translator
          tag='h3'
          translationPath='disclaimers.paymentRefunds.title'
        />

        <PaymentRefundsItems {...props} />

        <Translator
          tag='h3'

          translationPath='disclaimers.privacy.title'
        />

        <PrivacyItems {...props} />

        <Translator
          tag='h3'
          translationPath='disclaimers.certifications.title'
        />

        <CertificationsItems {...props} />

      </div>
    </div>
  );
};

export default DisclaimersInfo;

