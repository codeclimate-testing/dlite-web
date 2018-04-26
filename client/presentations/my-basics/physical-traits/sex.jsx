'use strict';

import React              from 'react';
import RadioCollection    from '../../radio-selector-collection.jsx';
import RadioSelector      from '../../radio-selector.jsx';
import Translator         from '../../../i18n/translator-tag.jsx';

const Sex = (props) => {
  return (
    <div className="sex">
      <Translator
        tag             = 'h2'
        className       = 'question'
        translationPath = 'myBasics.traitsPage.sex.prompt'
        tabIndex        = '0'
      />
      <div>
        <fieldset role='group' aria-label='Sex choices'>
          <RadioCollection
            {...props}
            name='sex'
          >
            <RadioSelector value='Female'>
              <Translator tag = 'span' translationPath = 'myBasics.traitsPage.sex.values.1'/>
            </RadioSelector>

            <RadioSelector value='Male'>
              <Translator tag = 'span' translationPath = 'myBasics.traitsPage.sex.values.0'/>
            </RadioSelector>

          </RadioCollection>
        </fieldset>
      </div>
    </div>
  );
};

export default Sex;
