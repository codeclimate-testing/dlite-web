'use strict';

import React              from 'react';
import RadioCollection    from '../../radio-selector-collection.jsx';
import RadioSelector      from '../../radio-selector.jsx';
import translations       from '../../../i18n';
import Translator         from '../../../i18n/translator-tag.jsx';

const Sex = (props) => {
  let locale = props.locale;
  return (
    <div className="sex">
      <Translator
        tag             = 'h2'
        className       = 'question'
        translationPath = 'myBasics.traitsPage.sex.prompt'
      />
      <div>
        <fieldset>
          <RadioCollection
            {...props}
            name='sex'
          >
            <RadioSelector
              value='Female'
              text={translations[locale].myBasics.traitsPage.sex.values[1]}
            />
            <RadioSelector
              value='Male'
              text={translations[locale].myBasics.traitsPage.sex.values[0]}
            />
          </RadioCollection>
        </fieldset>
      </div>
    </div>
  );
};

export default Sex;
