'use strict'

import React                    from 'react';
import { gettingRealID }        from '../../../helpers/data/real-id';
import { hasSocialSecurityYes } from '../../../helpers/data/ssn';
import { showBulletPoint }      from '../../../helpers/data/veteran';
import { hasMedical }           from '../../../helpers/data/my-history';
import { choosingReducedFee }   from '../../../helpers/data/reduced-fee';
import {
  isNewDriver,
  needsKnowledgeTest
}          from '../../../helpers/data/youth';
import Translator         from '../../../i18n/translator-tag.jsx';

const RealID = (props) => {
  if (gettingRealID(props)) {
    return (
      <Translator
        tag             = 'li'
        key             = 'real-id'
        translationPath = 'newApproved.requiredDocuments.bulletList.realID'
      />
      );
  }
  return (
    <Translator
      tag             = 'li'
      key             = 'legal-presence'
      translationPath = 'newApproved.requiredDocuments.bulletList.legalPresence'
    />
    );
};

const SocialSecurity = (props) => {
  if (!hasSocialSecurityYes(props)) { return null; }
  return (
    <Translator
      tag             = 'li'
      key             = 'social-security'
      translationPath = 'newApproved.requiredDocuments.bulletList.socialSecurity'
    />
    );
};

const Residency = () => {
  return (
    <Translator
      tag             = 'li'
      key             = 'ca-residency'
      translationPath = 'newApproved.requiredDocuments.bulletList.residency'
    />
    );
};

const Veteran = (props) => {
  if (!showBulletPoint(props)) { return null; }
  return (
    <Translator
      tag             = 'li'
      key             = 'proof-veteran-service'
      translationPath = 'newApproved.requiredDocuments.bulletList.veteran'
    />
    );
};

const MedicalCondition = (props) => {
  if (!hasMedical(props)) { return null; }
  return (
    <Translator
      tag             = 'li'
      key             = 'medical-information'
      translationPath = 'newApproved.requiredDocuments.bulletList.medicalInformation'
    />
    );
};

const Youth = (props) => {
  if (!isNewDriver(props)) { return null; }

  const KnowledgeTest = (props) => {
    if (!needsKnowledgeTest(props)) { return null;}
    return (
      <Translator
        tag             = 'li'
        key             = 'knowledge-test'
        translationPath = 'newApproved.requiredDocuments.bulletList.youth'
      />
      );
  };

  return (
    <div>
      <Translator
        tag             = 'li'
        key             = 'new-driver'
        translationPath = 'newApproved.requiredDocuments.bulletList.newDriver'
      />
      <KnowledgeTest {...props} />
    </div>
    )
};

const ReducedFee = (props) => {
  if (!choosingReducedFee(props)) { return null; }
  return (
    <div>
      <Translator
        tag             = 'li'
        key             = 'reduced-fee'
        translationPath = 'newApproved.requiredDocuments.bulletList.reducedFee'
      />
      <Translator
        tag             = 'li'
        key             = 'no-fee'
        translationPath = 'newApproved.requiredDocuments.bulletList.noFee'
      />
    </div>
    )
};

const BulletList = (props) => {
  return (
    <ul className='bullet-list'>
      <RealID {...props} />
      <SocialSecurity {...props} />
      <Residency />
      <Veteran {...props} />
      <MedicalCondition {...props} />
      <Youth {...props} />
      <ReducedFee {...props} />
    </ul>
    )
};

export default BulletList;
