'use strict';

import React              from 'react';
import RadioCollection    from '../../radio-selector-collection.jsx';
import RadioSelector      from '../../radio-selector.jsx';
import translations       from '../../../i18n';

const translationPath = translations.myBasics.traitsPage.eyeColor;

const EyeColor = (props) => {
  return (
    <div className='eye-color'>
      <hr />
      <h2 className='question'>{translationPath.prompt}</h2>
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
