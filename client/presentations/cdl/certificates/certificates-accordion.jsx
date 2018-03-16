'use strict';

import React from 'react';
import translations       from '../../../i18n';
import Accordion          from '../../../containers/accordion.jsx';
import Translation        from '../../../i18n/translate-tag.jsx';

const Form = (props) => {
  let locale = props.locale
  if (props.cdlCertificates.needCertificates === 'Yes') {
    return (
      <Accordion
        id='cdl-certificates-info'
        title={translations[locale].cdl.endorsmentsPage.certificationSection.certifications.FAQMissingCertifications.title} >

        <Translation tag='p'>
          {translations[locale].cdl.endorsmentsPage.certificationSection.certifications.FAQMissingCertifications.body.header}
        </Translation>
        <ul className='bullet-list'>
          <Translation tag='li'>
            {translations[locale].cdl.endorsmentsPage.certificationSection.certifications.FAQMissingCertifications.body.listItems[0]}
          </Translation>
          <Translation tag='li'>
            {translations[locale].cdl.endorsmentsPage.certificationSection.certifications.FAQMissingCertifications.body.listItems[1]}
          </Translation>
          <Translation tag='li'>
            {translations[locale].cdl.endorsmentsPage.certificationSection.certifications.FAQMissingCertifications.body.listItems[2]}
          </Translation>
          <Translation tag='li'>
            {translations[locale].cdl.endorsmentsPage.certificationSection.certifications.FAQMissingCertifications.body.listItems[3]}
          </Translation>
          <Translation tag='li'>
            {translations[locale].cdl.endorsmentsPage.certificationSection.certifications.FAQMissingCertifications.body.listItems[4]}
          </Translation>
          <Translation tag='li'>
            {translations[locale].cdl.endorsmentsPage.certificationSection.certifications.FAQMissingCertifications.body.listItems[5]}
          </Translation>
          <Translation tag='li'>
            {translations[locale].cdl.endorsmentsPage.certificationSection.certifications.FAQMissingCertifications.body.listItems[6]}
          </Translation>
        </ul>
      </Accordion>
      )
  } else { return null; }
};

export default Form;
