'use strict';

import React from 'react';
import translations       from '../../../i18n';
import { convertToHtml }  from '../../../i18n/convert-to-html.jsx';
import Accordion          from '../../../containers/accordion.jsx';

const Form = (props) => {
  let locale = props.locale
  if (props.cdlCertificates.needCertificates === 'Yes') {
    return (
      <Accordion
        id='cdl-certificates-info'
        title={translations[locale].cdl.endorsmentsPage.certificationSection.certifications.FAQMissingCertifications.title} >

        {convertToHtml('p', translations[locale].cdl.endorsmentsPage.certificationSection.certifications.FAQMissingCertifications.body.header)}
        <ul className='bullet-list'>
          {convertToHtml('li', translations[locale].cdl.endorsmentsPage.certificationSection.certifications.FAQMissingCertifications.body.listItems[0])}
          {convertToHtml('li', translations[locale].cdl.endorsmentsPage.certificationSection.certifications.FAQMissingCertifications.body.listItems[1])}
          {convertToHtml('li', translations[locale].cdl.endorsmentsPage.certificationSection.certifications.FAQMissingCertifications.body.listItems[2])}
          {convertToHtml('li', translations[locale].cdl.endorsmentsPage.certificationSection.certifications.FAQMissingCertifications.body.listItems[3])}
          {convertToHtml('li', translations[locale].cdl.endorsmentsPage.certificationSection.certifications.FAQMissingCertifications.body.listItems[4])}
          {convertToHtml('li', translations[locale].cdl.endorsmentsPage.certificationSection.certifications.FAQMissingCertifications.body.listItems[5])}
          {convertToHtml('li', translations[locale].cdl.endorsmentsPage.certificationSection.certifications.FAQMissingCertifications.body.listItems[6])}
        </ul>
      </Accordion>
    )
  } else { return null; }
};

export default Form;