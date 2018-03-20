'use strict';

import React              from 'react';
import RadioSelector      from '../../radio-selector.jsx';
import RadioCollection    from '../../radio-selector-collection.jsx';
import translations       from '../../../i18n';
import Translator         from '../../../i18n/translator-tag.jsx';

const ClassRadios = (props) => {
  let locale = props.locale;
  return (
    <div className='cdl-class-form'>
      <Translator
        tag             = 'h2'
        className       = 'question'
        translationPath = 'cdl.licenseClassPage.prompt'
      />
      <fieldset role='group' aria-label='Commercial classes'>
        <RadioCollection
          {...props}
          name          = 'class'
        >
          <RadioSelector
            value = 'classA'
            text  = {translations[locale].cdl.licenseClassPage.values[0]}
          />
          <RadioSelector
            value = 'classB'
            text  = {translations[locale].cdl.licenseClassPage.values[1]}
          />
          <RadioSelector
            value = 'classC'
            text  = {translations[locale].cdl.licenseClassPage.values[2]}
          />
        </RadioCollection>
      </fieldset>
    </div>
  )
};

export default ClassRadios;
