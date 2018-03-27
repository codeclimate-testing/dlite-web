'use strict';

import React              from 'react';
import RadioCollection    from '../../radio-selector-collection.jsx';
import RadioSelector      from '../../radio-selector.jsx';
import Translator         from '../../../i18n/translator-tag.jsx';

const EyeColor = (props) => {

  return (
    <div className='eye-color'>
      <hr />
        <Translator
          tag             = 'h2'
          className       = 'question'
          translationPath = 'myBasics.traitsPage.eyeColor.prompt'
        />
      <div>
        <fieldset role='group' aria-label='Eye color'>
          <RadioCollection
            {...props}
            name='eyeColor'
            custom={true}
          >
            <RadioSelector value='Black'>
              <Translator tag = 'span' translationPath = 'myBasics.traitsPage.eyeColor.values.0'/>
            </RadioSelector>

            <RadioSelector value='Blue'>
              <Translator tag = 'span' translationPath = 'myBasics.traitsPage.eyeColor.values.1'/>
            </RadioSelector>

            <RadioSelector value='Brown'>
              <Translator tag = 'span' translationPath = 'myBasics.traitsPage.eyeColor.values.2'/>
            </RadioSelector>

            <RadioSelector value='Gray'>
              <Translator tag = 'span' translationPath = 'myBasics.traitsPage.eyeColor.values.3'/>
            </RadioSelector>

            <RadioSelector value='Green'>
              <Translator tag = 'span' translationPath = 'myBasics.traitsPage.eyeColor.values.4'/>
            </RadioSelector>

            <RadioSelector value='Hazel'>
              <Translator tag = 'span' translationPath = 'myBasics.traitsPage.eyeColor.values.5'/>
            </RadioSelector>
          </RadioCollection>
        </fieldset>
      </div>
    </div>
  );
};

export default EyeColor;
