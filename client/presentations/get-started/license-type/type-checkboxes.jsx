'use strict';

import React              from 'react';
import CheckboxSelector   from '../../checkbox-selector.jsx';
import CheckboxCollection from '../../checkbox-selector-collection.jsx';
import Translator         from '../../../i18n/translator-tag.jsx';

const Form = (props) => {

  return (
    <div className='license-type-form'>
        <Translator
          tag             = 'h2'
          className       = 'question'
          translationPath = 'intro.licenseTypePage.prompt'
          tabIndex        = '0'
        />
        <Translator
          tag             = 'p'
          translationPath = 'intro.licenseTypePage.explanation'
        />
      <div className='row'>
        <fieldset role='group' aria-label='License classes'>
          <CheckboxCollection
            {...props}
            name          = 'type'
            array         = { props.licenseType.type }
            onBlur        = { props.onBlurValidate }
            errorMessage  = { props.validations.licenseType() }
          >
            <CheckboxSelector value = 'car' className='vehicle-class' iconClass='car'>
              <Translator tag = 'span' translationPath = 'intro.licenseTypePage.values.0.label' />
            </CheckboxSelector>
            <CheckboxSelector value = 'cycle' className='vehicle-class' iconClass='cycle'>
              <Translator tag = 'span' translationPath = 'intro.licenseTypePage.values.1.label' />
            </CheckboxSelector>
            <CheckboxSelector value = 'long' className='vehicle-class' iconClass='long'>
              <Translator tag = 'span' translationPath = 'intro.licenseTypePage.values.2.label' />
            </CheckboxSelector>
            <CheckboxSelector value = 'trailer' className='vehicle-class' iconClass='trailer'>
              <Translator tag = 'span' translationPath = 'intro.licenseTypePage.values.3.label' />
            </CheckboxSelector>
          </CheckboxCollection>
        </fieldset>
      </div>
    </div>
  )
};

export default Form;
