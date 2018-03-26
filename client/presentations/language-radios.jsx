'use strict';

import React                from 'react';
import RadioCollection      from './radio-selector-collection.jsx';
import RadioSelector        from './radio-selector.jsx';
import translations         from '../i18n';

const LanguageNativeLine = (props) => {
  if (props.values.native == props.values.translation) { return null; }

  return (
    <div className='locale-language-version'>{ props.values.translation }</div>
  );
};

const LanguageRadios = (props) => {
  let locale = props.locale;
  let translationAddress = translations[locale].intro.switchLanguagePage;

  const languageNameMapping = {
    en: {
      native: 'English',
      translation: translationAddress.values[0]
    },
    es: {
      native: 'Español',
      translation: translationAddress.values[3]
    },
    zh: {
      native: '中文',
      translation: translationAddress.values[1]
    },
    ko: {
      native: '한국어',
      translation: translationAddress.values[6]
    },
    km: {
      native: 'ភាសាខ្មែ',
      translation: translationAddress.values[7]
    },
    th: {
      native: 'ไทย',
      translation: translationAddress.values[4]
    },
    vi: {
      native: 'Tiếng Việt',
      translation: translationAddress.values[9]
    },
    tl: {
      native: 'Tagalog',
      translation: translationAddress.values[5]
    },
    ja: {
      native: '日本語',
      translation: translationAddress.values[2]
    },
    hi: {
      native: 'हिंदी',
      translation: translationAddress.values[8]
    }
  };

  const values = (code) => {
    return languageNameMapping[code] || {};
  };

  return (
    <fieldset role='group' aria-label='Languages'>
      <RadioCollection
        {...props}
      >
        <RadioSelector
          text={ values('en').native }
          value = 'en'
        >
          <LanguageNativeLine values={ values('en') } />
        </RadioSelector>
        <RadioSelector
          text={ values('es').native }
          value='es'
        >
          <LanguageNativeLine values={ values('es') } />
        </RadioSelector>
        <RadioSelector
          text={ values('zh').native }
          value='zh'
        >
          <LanguageNativeLine values={ values('zh') } />
        </RadioSelector>
        <RadioSelector
          text={ values('ko').native }
          value='ko'
        >
          <LanguageNativeLine values={ values('ko') } />
        </RadioSelector>
        <RadioSelector
          text={ values('km').native }
          value='km'
        >
          <LanguageNativeLine values={ values('km') } />
        </RadioSelector>
        <RadioSelector
          text={ values('th').native }
          value='th'
        >
          <LanguageNativeLine values={ values('th') } />
        </RadioSelector>
        <RadioSelector
          text={ values('vi').native }
          value='vi'
        >
          <LanguageNativeLine values={ values('vi') } />
        </RadioSelector>
        <RadioSelector
          text={ values('tl').native }
          value='tl'
        >
          <LanguageNativeLine values={ values('tl') } />
        </RadioSelector>
        <RadioSelector
          text={ values('ja').native }
          value='ja'
        >
          <LanguageNativeLine values={ values('ja') } />
        </RadioSelector>
        <RadioSelector
          text={ values('hi').native }
          value='hi'
        >
          <LanguageNativeLine values={ values('hi') } />
        </RadioSelector>
      </RadioCollection>
    </fieldset>
  );
};

export default LanguageRadios;
