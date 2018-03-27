'use strict';

import React                from 'react';
import RadioCollection      from './radio-selector-collection.jsx';
import RadioSelector        from './radio-selector.jsx';
import Translator           from '../i18n/translator-tag.jsx';

const LanguageWithNativeLine = (props) => {

  const languageNameMapping = {
    en: {
      native: 'English',
      translation: 'intro.switchLanguagePage.values.0'
    },
    es: {
      native: 'Español',
      translation: 'intro.switchLanguagePage.values.3'
    },
    zh: {
      native: '中文',
      translation: 'intro.switchLanguagePage.values.1'
    },
    ko: {
      native: '한국어',
      translation: 'intro.switchLanguagePage.values.6'
    },
    km: {
      native: 'ភាសាខ្មែ',
      translation: 'intro.switchLanguagePage.values.7'
    },
    th: {
      native: 'ไทย',
      translation: 'intro.switchLanguagePage.values.4'
    },
    vi: {
      native: 'Tiếng Việt',
      translation: 'intro.switchLanguagePage.values.9'
    },
    tl: {
      native: 'Tagalog',
      translation: 'intro.switchLanguagePage.values.5'
    },
    ja: {
      native: '日本語',
      translation: 'intro.switchLanguagePage.values.2'
    },
    hi: {
      native: 'हिंदी',
      translation: 'intro.switchLanguagePage.values.8'
    }
  };

  const values = (code) => {
    return languageNameMapping[code] || {};
  };

  let value     = props.value;
  let language  = props.language;

  if( (language && language === value) || ( !language && value === 'en' )) {
    return (
      <Translator
        tag             = 'span'
        translationPath = { values(value).translation }
      />
    );
  }

  return (
    <div>
      <Translator
        tag             = 'span'
        translationPath = { values(value).native }
      />
      <Translator
        tag             = 'div'
        className       = 'locale-language-version'
        translationPath = { values(value).translation }
      />
    </div>
  );
};

const LanguageRadios = (props) => {
  return (
    <fieldset role='group' aria-label='Languages'>
      <RadioCollection {...props} >

        <RadioSelector value = 'en'>
          <LanguageWithNativeLine value = 'en' language = { props.language } />
        </RadioSelector>

        <RadioSelector value = 'es'>
          <LanguageWithNativeLine value = 'es' language = { props.language } />
        </RadioSelector>

        <RadioSelector value = 'zh'>
          <LanguageWithNativeLine value = 'zh' language = { props.language } />
        </RadioSelector>

        <RadioSelector value = 'ko'>
          <LanguageWithNativeLine value = 'ko' language = { props.language } />
        </RadioSelector>

        <RadioSelector value = 'km'>
          <LanguageWithNativeLine value = 'km' language = { props.language } />
        </RadioSelector>

        <RadioSelector value = 'th'>
          <LanguageWithNativeLine value = 'th' language = { props.language } />
        </RadioSelector>

        <RadioSelector value = 'vi'>
          <LanguageWithNativeLine value = 'vi' language = { props.language } />
        </RadioSelector>

        <RadioSelector value = 'tl'>
          <LanguageWithNativeLine value = 'tl' language = { props.language } />
        </RadioSelector>

        <RadioSelector value = 'ja'>
          <LanguageWithNativeLine value = 'ja' language = { props.language } />
        </RadioSelector>

        <RadioSelector value = 'hi'>
          <LanguageWithNativeLine value = 'hi' language = { props.language } />
        </RadioSelector>

      </RadioCollection>
    </fieldset>
  );
};

export default LanguageRadios;
