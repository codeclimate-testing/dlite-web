'use strict';

import React              from 'react';
import Accordion          from '../../../containers/accordion.jsx';
import Translator         from '../../../i18n/translator-tag.jsx';

const CertAccordion = (props) => {
  return (
    <Accordion
      id    = 'cdl-self-certification'
      title = 'newApproved.cdl.selfCertification.notSure.title'
    >
      <Translator
        tag             = 'h4'
        translationPath = 'newApproved.cdl.selfCertification.notSure.interstate.title'
      />
      <Translator
        tag             = 'p'
        translationPath = 'newApproved.cdl.selfCertification.notSure.interstate.explanation'
      />
      <ul className='bullet-list'>
      <Translator
        tag             = 'li'
        translationPath = 'newApproved.cdl.selfCertification.notSure.interstate.values.0'
      />
      <Translator
        tag             = 'li'
        translationPath = 'newApproved.cdl.selfCertification.notSure.interstate.values.1'
      />
      <Translator
        tag             = 'li'
        translationPath = 'newApproved.cdl.selfCertification.notSure.interstate.values.2'
      />
      </ul>

      <Translator
        tag             = 'h4'
        translationPath = 'newApproved.cdl.selfCertification.notSure.intrastate.title'
      />
      <Translator
        tag             = 'p'
        translationPath = 'newApproved.cdl.selfCertification.notSure.intrastate.explanation'
      />

      <Translator
        tag             = 'h4'
        translationPath = 'newApproved.cdl.selfCertification.notSure.excepted.title'
      />

      <Translator
        tag             = 'p'
        translationPath = 'newApproved.cdl.selfCertification.notSure.excepted.explanation'
      />
    </Accordion>
  )
};

export default CertAccordion;
