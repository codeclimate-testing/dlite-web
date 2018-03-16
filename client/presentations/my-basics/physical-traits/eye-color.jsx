'use strict';

import React              from 'react';
import RadioCollection    from '../../radio-selector-collection.jsx';
import RadioSelector      from '../../radio-selector.jsx';
import translations       from '../../../i18n';
import Translation        from '../../../i18n/translate-tag.jsx';

const EyeColor = (props) => {
  let locale = props.locale;
  const translationPath = translations[locale].myBasics.traitsPage.eyeColor;
  return (
    <div className='eye-color'>
      <hr />
        <Translation tag='h2' className='question'>
          {translationPath.prompt}
        </Translation>
      <div>
        <fieldset>
          <RadioCollection
            {...props}
            name='eyeColor'
            custom={true}
          >
            <RadioSelector
              text={translationPath.values[0]}
              value='Black'
            />
            <RadioSelector
              text={translationPath.values[1]}
              value='Blue'
            />
            <RadioSelector
              text={translationPath.values[2]}
              value='Brown'
            />
            <RadioSelector
              text={translationPath.values[3]}
              value='Gray'
            />
            <RadioSelector
              text={translationPath.values[4]}
              value='Green'
            />
            <RadioSelector
              text={translationPath.values[5]}
              value='Hazel'
            />
          </RadioCollection>
        </fieldset>
      </div>
    </div>
  );
};

export default EyeColor;
