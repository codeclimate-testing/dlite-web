'use strict'

import React        from 'react';
import Translator   from '../../i18n/translator-tag.jsx';

const DisclaimersInfo = (props) => {
  return (
    <div className='scroll-wrapper disclaimers-info'>
      <Translator
      tag='h2'
      translationPath='newExtracted.intro.getStartedPage.disclaimers.review'
      tabIndex = '0'
      />

      <div className='scroll-content' aria-label='Disclaimers' tabIndex='0'>
        <CDLDrivingTypesItems {...props} />

        <MedicalItems {...props} />

        <VeteransItems {...props} />

        <OrganDonationItems {...props} />

        <VoterRegistrationItems {...props} />
        <CDLVoterRegistrationItems {...props} />

        <CriminalProsecutionItems {...props} />

        <FinancialResponsibilityItems {...props} />

        <PaymentRefundsItems {...props} />

        <PrivacyItems {...props} />
        <CDLPrivacyItems {...props} />

        <CertificationsItems {...props} />

      </div>
    </div>
  );
}

const MedicalItems = (props) => {
  return (
    <div className='scrollbox'>
      <Translator
        tag='h3'
        translationPath='disclaimers.medical.title'
      />
      <Translator
        tag='p'
        translationPath='disclaimers.medical.body'
      />
      <ul className='bullet-list'>
        <Translator
          tag='li'
          translationPath='disclaimers.medical.bodyBullets.0'
        />
        <Translator
          tag='li'
          translationPath='disclaimers.medical.bodyBullets.1'
        />
        <Translator
          tag='li'
          translationPath='disclaimers.medical.bodyBullets.2'
        />
        <Translator
          tag='li'
          translationPath='disclaimers.medical.bodyBullets.3'
        />
        <Translator
          tag='li'
          translationPath='disclaimers.medical.bodyBullets.4'
        />
      </ul>
    </div>
  )
}

const VeteransItems = (props) => {
  return (
    <div className='scrollbox'>
      <Translator
        tag='h3'
        translationPath='disclaimers.veteran.title'
      />
      <ul className='bullet-list'>
        <Translator
          tag='li'
          translationPath='disclaimers.veteran.bodyBullets.0'
        />
        <Translator
          tag='li'
          translationPath='disclaimers.veteran.bodyBullets.1'
        />
      </ul>
    </div>
  );
};

const OrganDonationItems = (props) => {
  return (
    <div className='scrollbox'>
      <Translator
        tag='h3'
        translationPath='disclaimers.organDonation.title'
      />

    <Translator
      tag='p'
      translationPath='disclaimers.organDonation.body'
    />
  </div>
  )
}

const VoterRegistrationItems = (props) => {
  if(props.chooseApp === 'cdl') { return null;} 
    return (
      <div className='scrollbox'>
        <Translator
          tag='h3'
          translationPath='disclaimers.voterRegistration.title'
        />
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
        </ul>
      </div>
    );
};

const CriminalProsecutionItems = (props) => {
  return (
    <div className='scrollbox'>
      <Translator
        tag='h3'
        translationPath='disclaimers.criminalProsecution.title'
      />
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
    </div>
  );
};

const FinancialResponsibilityItems = (props) => {
  return (
    <div className='scrollbox'>
      <Translator
        tag='h3'
        translationPath='disclaimers.financialResponsibility.title'
      />
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
    </div>
  );
};

const PaymentRefundsItems = (props) => {
  return (
    <div className='scrollbox'>
      <Translator
        tag='h3'
        translationPath='disclaimers.paymentRefunds.title'
      />
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
    </div>
  );
};

const PrivacyItems = (props) => {
  if(props.chooseApp === 'cdl') { return null; }
    return (
      <div className='scrollbox'>
        <Translator
          tag='h3'

          translationPath='disclaimers.privacy.title'
        />
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
      </div>
    );
};

const CertificationsItems = (props) => {
  return (
    <div className='scrollbox'>
      <Translator
        tag='h3'
        translationPath='disclaimers.certifications.title'
      />
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
    </div>
  );
};

const CDLDrivingTypesItems = (props) => {
  if(props.chooseApp !== 'cdl') { return null; }
    return (
      <div className='scrollbox'>
        <Translator
          tag='h3'
          translationPath='disclaimers.cdl.drivingTypes.title'
        />
        <Translator
          tag='p'
          translationPath='disclaimers.cdl.drivingTypes.body'
        />
        <ul className='bullet-list'>
          <Translator
            tag='li'
            translationPath='disclaimers.cdl.drivingTypes.bodyBullets.0'
          />
          <Translator
            tag='li'
            translationPath='disclaimers.cdl.drivingTypes.bodyBullets.1'
          />
          <Translator
            tag='li'
            translationPath='disclaimers.cdl.drivingTypes.bodyBullets.2'
          />
        </ul>
      </div>
    );
};

const CDLVoterRegistrationItems = (props) => {
  if(props.chooseApp !== 'cdl') { return null; }
  return (
    <div className='scrollbox'>
      <Translator
        tag='h3'
        translationPath='disclaimers.cdl.voterRegistration.title'
      />
      <ul className='bullet-list'>
        <Translator
          tag='li'
          translationPath='disclaimers.cdl.voterRegistration.bodyBullets.0'
        />
        <Translator
          tag='li'
          translationPath='disclaimers.cdl.voterRegistration.bodyBullets.1'
        />
        <Translator
          tag='li'
          translationPath='disclaimers.cdl.voterRegistration.bodyBullets.2'
        />
        <Translator
          tag='li'
          translationPath='disclaimers.cdl.voterRegistration.bodyBullets.3'
        />
        <Translator
          tag='li'
          translationPath='disclaimers.cdl.voterRegistration.bodyBullets.4'
        />
        <Translator
          tag='li'
          translationPath='disclaimers.cdl.voterRegistration.bodyBullets.5'
        />
      </ul>
    </div>
  );
}

const CDLPrivacyItems = (props) => {
  if(props.chooseApp !== 'cdl') { return null;}
    return (
      <div className='scrollbox'>
        <Translator
          tag='h3'

          translationPath='disclaimers.cdl.privacy.title'
        />
        <ul className='bullet-list'>
          <Translator
            tag='li'
            translationPath='disclaimers.cdl.privacy.bodyBullets.0'
          />
          <Translator
            tag='li'
            translationPath='disclaimers.cdl.privacy.bodyBullets.1'
          />
          <Translator
            tag='li'
            translationPath='disclaimers.cdl.privacy.bodyBullets.2'
          />
          <Translator
            tag='li'
            translationPath='disclaimers.cdl.privacy.bodyBullets.3'
          />
          <Translator
            tag='li'
            translationPath='disclaimers.cdl.privacy.bodyBullets.4'
          />
          <Translator
            tag='li'
            translationPath='disclaimers.cdl.privacy.bodyBullets.5'
          />
          <Translator
            tag='li'
            translationPath='disclaimers.cdl.privacy.bodyBullets.6'
          />
          <Translator
            tag='li'
            translationPath='disclaimers.cdl.privacy.bodyBullets.7'
          />
          <Translator
            tag='li'
            translationPath='disclaimers.cdl.privacy.bodyBullets.8'
          />
        </ul>
      </div>
    );
};

export default DisclaimersInfo;
