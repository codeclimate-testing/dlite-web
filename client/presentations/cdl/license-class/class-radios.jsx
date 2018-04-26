'use strict';

import React              from 'react';
import RadioSelector      from '../../radio-selector.jsx';
import RadioCollection    from '../../radio-selector-collection.jsx';
import Translator         from '../../../i18n/translator-tag.jsx';

const ClassRadios = (props) => {
  return (
    <div className='cdl-class-form'>
      <Translator
        tag             = 'h2'
        className       = 'question'
        translationPath = 'cdl.licenseClassPage.prompt'
        tabIndex        = '0'
      />
      <fieldset role='group' aria-label='Commercial classes'>
        <RadioCollection {...props} name = 'class'>
          <RadioSelector value = 'classA'>
            <Translator tag = 'span' translationPath = 'cdl.licenseClassPage.values.0' />
          </RadioSelector>

          <RadioSelector value = 'classB'>
            <Translator tag = 'span' translationPath = 'cdl.licenseClassPage.values.1' />
          </RadioSelector>

          <RadioSelector value = 'classC'>
          <Translator tag = 'span' translationPath = 'cdl.licenseClassPage.values.2' />
          </RadioSelector>
        </RadioCollection>
      </fieldset>
    </div>
  )
};

export default ClassRadios;
