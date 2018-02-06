'use strict';

import React from 'react';
import CheckboxSelector from '../../checkbox-selector.jsx';
import CheckboxCollection from '../../checkbox-selector-collection.jsx';
import translations       from '../../../i18n';
import { convertToHtml }  from '../../../i18n/convert-to-html.jsx';

const Form = (props) => {

  return (
    <div className='license-type-form'>
      {convertToHtml('h2', translations.intro.licenseTypePage.prompt, 'question')}
      {convertToHtml('p', translations.intro.licenseTypePage.explanation)}
      <div className='row'>
        <fieldset>
        <CheckboxCollection
          {...props}
          name  = 'type'
          array = {props.licenseType.type }
          onBlur = { props.onBlurValidate }
          errorMessage={ props.validations.licenseType() }
        >
          <CheckboxSelector
            value = 'car'
            text  = {translations.intro.licenseTypePage.values[0].label}
          />
          <CheckboxSelector
            value = 'cycle'
            text  = {translations.intro.licenseTypePage.values[1].label}
          />
          <CheckboxSelector
            value = 'trailer'
            text  = {translations.intro.licenseTypePage.values[2].label}
          />
          <CheckboxSelector
            value = 'long'
            text  = {translations.intro.licenseTypePage.values[3].label}
          />
          <CheckboxSelector
            value = 'unsure'
            text  = "I'm not sure"
          />
        </CheckboxCollection>
        </fieldset>
      </div>
    </div>
  )
};

export default Form;
