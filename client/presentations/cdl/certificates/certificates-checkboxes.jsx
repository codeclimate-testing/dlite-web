'use strict';

import React from 'react';
import CheckboxSelector   from '../../checkbox-selector.jsx';
import CheckboxCollection from '../../checkbox-selector-collection.jsx';
import translations       from '../../../i18n';
import Translation        from '../../../i18n/translate-tag.jsx';

const Form = (props) => {
  let locale = props.locale
  if(props.cdlCertificates.needCertificates === 'Yes') {
    return (
      <div className='certificates-type-form'>
        <Translation tag='h2' className='question'>
           {translations[locale].cdl.endorsmentsPage.certificationSection.certifications.prompt}
        </Translation>
        <div className='row'>
          <fieldset>
            <CheckboxCollection
              {...props}
              name  = 'type'
              array = {props.cdlCertificates.type }
              onBlur = { props.onBlurValidate }
              errorMessage={ props.validations.certificatesType() }
            >
              <CheckboxSelector
                value = 'transit'
                text  = {translations[locale].cdl.endorsmentsPage.certificationSection.certifications.values.transit}
              />
              <CheckboxSelector
                value = 'ambulance'
                text  = {translations[locale].cdl.endorsmentsPage.certificationSection.certifications.values.ambulance}
              />
              <CheckboxSelector
                value = 'ham'
                text  = {translations[locale].cdl.endorsmentsPage.certificationSection.certifications.values.ham}
              />
            </CheckboxCollection>

          </fieldset>
        </div>
      </div>
    )
  } else { return null; }
};

export default Form;
