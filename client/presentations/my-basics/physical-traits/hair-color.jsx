'use strict';

import React              from 'react';
import RadioCollection    from '../../radio-selector-collection.jsx';
import RadioSelector      from '../../radio-selector.jsx';
import Translator         from '../../../i18n/translator-tag.jsx';

const HairColor = (props) => {
  return (
    <div className='hair-color'>
      <Translator
        tag             = 'h2'
        className       = 'question'
        translationPath = 'myBasics.traitsPage.hairColor.prompt'
        tabIndex        = '0'
      />
      <fieldset role='group' aria-label='Hair color'>
        <RadioCollection
          {...props}
          name='hairColor'
          custom={true}
        >
          <RadioSelector value='Auburn'>
            <Translator tag = 'span' translationPath = 'myBasics.traitsPage.hairColor.values.0'/>
          </RadioSelector>
          <RadioSelector value='Bald'>
            <Translator tag = 'span' translationPath = 'myBasics.traitsPage.hairColor.values.1'/>
          </RadioSelector>
          <RadioSelector value='Black'>
            <Translator tag = 'span' translationPath = 'myBasics.traitsPage.hairColor.values.2'/>
          </RadioSelector>
          <RadioSelector value='Blonde'>
            <Translator tag = 'span' translationPath = 'myBasics.traitsPage.hairColor.values.3'/>
          </RadioSelector>
          <RadioSelector value='Brown'>
            <Translator tag = 'span' translationPath = 'myBasics.traitsPage.hairColor.values.4'/>
          </RadioSelector>
          <RadioSelector value='Gray'>
            <Translator tag = 'span' translationPath = 'myBasics.traitsPage.hairColor.values.5'/>
          </RadioSelector>
          <RadioSelector value='Red'>
            <Translator tag = 'span' translationPath = 'myBasics.traitsPage.hairColor.values.6'/>
          </RadioSelector>
          <RadioSelector value='White'>
            <Translator tag = 'span' translationPath = 'myBasics.traitsPage.hairColor.values.7'/>
          </RadioSelector>
          <RadioSelector value='Other'>
            <Translator tag = 'span' translationPath = 'myBasics.traitsPage.hairColor.values.8'/>
          </RadioSelector>
        </RadioCollection>
      </fieldset>
    </div>
  );
};

export default HairColor;
