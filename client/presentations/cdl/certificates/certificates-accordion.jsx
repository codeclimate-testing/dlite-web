'use strict';

import React from 'react';
import Accordion          from '../../../containers/accordion.jsx';
import Translator         from '../../../i18n/translator-tag.jsx';

const Form = (props) => {
  if (props.cdlCertificates.needCertificates === 'Yes') {
    return (
      <Accordion
        id    = 'cdl-certificates-info'
        title = 'cdl.endorsmentsPage.certificationSection.certifications.FAQMissingCertifications.title'
      >
        <Translator
          tag             = 'p'
          translationPath = 'cdl.endorsmentsPage.certificationSection.certifications.FAQMissingCertifications.body.header'
        />
        <ul className='bullet-list'>
          <Translator
            tag             = 'li'
            translationPath = 'cdl.endorsmentsPage.certificationSection.certifications.FAQMissingCertifications.body.listItems.0'
          />
          <Translator
            tag             = 'li'
            translationPath = 'cdl.endorsmentsPage.certificationSection.certifications.FAQMissingCertifications.body.listItems.1'
          />
          <Translator
            tag             = 'li'
            translationPath = 'cdl.endorsmentsPage.certificationSection.certifications.FAQMissingCertifications.body.listItems.2'
          />
          <Translator
            tag             = 'li'
            translationPath = 'cdl.endorsmentsPage.certificationSection.certifications.FAQMissingCertifications.body.listItems.3'
          />
          <Translator
            tag             = 'li'
            translationPath = 'cdl.endorsmentsPage.certificationSection.certifications.FAQMissingCertifications.body.listItems.4'
          />
          <Translator
            tag             = 'li'
            translationPath = 'cdl.endorsmentsPage.certificationSection.certifications.FAQMissingCertifications.body.listItems.5'
          />
          <Translator
            tag             = 'li'
            translationPath = 'cdl.endorsmentsPage.certificationSection.certifications.FAQMissingCertifications.body.listItems.6'
          />
        </ul>
      </Accordion>
      )
  } else { return null; }
};

export default Form;
