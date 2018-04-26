'use strict';

import React                from 'react';
import CheckboxSelector     from '../../checkbox-selector.jsx';
import CheckboxCollection   from '../../checkbox-selector-collection.jsx';
import Translator           from '../../../i18n/translator-tag.jsx';

const Form = (props) => {
  if(props.cdlCertificates.needCertificates === 'Yes') {
    return (
      <div className='certificates-type-form'>
        <Translator
          tag             = 'h2'
          className       = 'question'
          translationPath = 'cdl.endorsmentsPage.certificationSection.certifications.prompt'
          tabIndex        = '0'
        />
        <div className='row'>
          <fieldset role='group' aria-label='Types of certificates'>
            <CheckboxCollection
              {...props}
              name  = 'type'
              array = {props.cdlCertificates.type }
              onBlur = { props.onBlurValidate }
              errorMessage={ props.validations.certificatesType() }
            >
              <CheckboxSelector value = 'transit'>
                <Translator tag = 'span' translationPath = 'cdl.endorsmentsPage.certificationSection.certifications.values.transit' />
              </CheckboxSelector>
              <CheckboxSelector value = 'ambulance'>
                <Translator tag = 'span' translationPath = 'cdl.endorsmentsPage.certificationSection.certifications.values.ambulance' />
              </CheckboxSelector>
              <CheckboxSelector value = 'ham'>
                <Translator tag = 'span' translationPath = 'cdl.endorsmentsPage.certificationSection.certifications.values.ham' />
              </CheckboxSelector>
            </CheckboxCollection>

          </fieldset>
        </div>
      </div>
    )
  } else { return null; }
};

export default Form;
