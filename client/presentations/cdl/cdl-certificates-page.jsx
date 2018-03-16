'use strict';

import React from 'react';
import CertificatesToggle      from './certificates/certificates-toggle.jsx';
import CertificatesCheckboxes  from './certificates/certificates-checkboxes.jsx';
import CertificatesAccordion   from './certificates/certificates-accordion.jsx';
import NavigationButtons       from '../navigation-buttons.jsx';
import Page                    from '../../containers/page.jsx';
import translations            from '../../i18n';

const Form = (props) => {
  let locale = props.locale;
  return (
    <Page
      {...props}
      sectionKey='intro'
    >
      <form className='cdl-certificates-form' onSubmit={props.onSubmit}>
        <CertificatesToggle
          {...props}
          selectedValue={ props.cdlCertificates.needCertificates }
        />

        <CertificatesCheckboxes
          {...props}
        />

        <CertificatesAccordion
          {...props}
        />

        <NavigationButtons
          {...props}
          errorMessage={props.validations.all()}
        />
      </form>
    </Page>
  )
};

export default Form;
