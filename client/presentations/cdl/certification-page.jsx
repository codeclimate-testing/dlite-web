'use strict';

import React                  from 'react';
import Page                   from '../../containers/page.jsx';
import Under21                from './dob-under21.jsx';
import RadioSelections        from './self-certification/radio-form.jsx';
import Accordion              from './self-certification/accordion.jsx';
import LegalAgreement         from './self-certification/legal-agreement.jsx';
import NavigationButtons      from '../navigation-buttons.jsx';
import Translator             from '../../i18n/translator-tag.jsx';

const Form = (props) => {
  return (
    <Page
      {...props}
      sectionKey='selfCert'
    >
      <div className='cdl-self-certification'>
        <form onSubmit = {props.onSubmit }>
          <Translator
            tag             = 'h2'
            className       = 'question'
            translationPath = 'newApproved.cdl.selfCertification.prompt'
          />

          <Under21 {...props} />

          <RadioSelections
            {...props}
            selectedValue     = { props.certification}
            errorMessage      = { props.validations.select() }
          />

          <Accordion {...props} />

          <LegalAgreement />

          <NavigationButtons
            {...props}
            errorMessage    = { props.validations.all() }
          />
        </form>
      </div>
    </Page>
  )
};

export default Form;
