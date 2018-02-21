'use strict';
import React                from 'react';
import RadioCollection      from './radio-selector-collection.jsx';
import RadioSelector        from './radio-selector.jsx';
import translations         from '../i18n';

const LanguageRadios = (props) => {
  let translationAddress = translations.intro.switchLanguagePage;

  return (
    <fieldset>
      <RadioCollection
        {...props}
      >
        <RadioSelector
          text = {translationAddress.values[0]}
          value = 'en'
        />
        <RadioSelector
          text  = {translationAddress.values[3]}
          value = 'es'
          />
        <RadioSelector
          text  = {translationAddress.values[1]}
          value = 'zh'
        />
        <RadioSelector
          text  = {translationAddress.values[6]}
          value = 'ko'
        />
        <RadioSelector
          text  = {translationAddress.values[7]}
          value = 'km'
        />
        <RadioSelector
          text  = {translationAddress.values[4]}
          value = 'th'
        />
        <RadioSelector
          text  = {translationAddress.values[9]}
          value = 'vi'
        />
        <RadioSelector
          text  = {translationAddress.values[5]}
          value = 'tl'
        />
        <RadioSelector
          text  = {translationAddress.values[2]}
          value = 'ja'
        />
        <RadioSelector
          text  = {translationAddress.values[8]}
          value = 'hi'
        />

      </RadioCollection>
    </fieldset>
  );
};

export default LanguageRadios;
