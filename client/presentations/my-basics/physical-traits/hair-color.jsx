'use strict';

import React              from 'react';
import RadioCollection    from '../../radio-selector-collection.jsx';
import RadioSelector      from '../../radio-selector.jsx';
import translations       from '../../../i18n';
import { convertToHtml }  from '../../../i18n/convert-to-html.jsx';

const HairColor = (props) => {
  let locale = props.locale;
  const translationPath = translations[locale].myBasics.traitsPage.hairColor;

  return (
    <div className='hair-color'>
      <hr />
        {convertToHtml('h2', translationPath.prompt, 'question')}
      <div>
        <fieldset>
          <RadioCollection
            {...props}
            name='hairColor'
            custom={true}
          >
            <RadioSelector
              text={translationPath.values[0]}
              value='Auburn'
            />
            <RadioSelector
              text={translationPath.values[1]}
              value='Bald'
            />
            <RadioSelector
              text={translationPath.values[2]}
              value='Black'
            />
            <RadioSelector
              text={translationPath.values[3]}
              value='Blonde'
            />
            <RadioSelector
              text={translationPath.values[4]}
              value='Brown'
            />
            <RadioSelector
              text={translationPath.values[5]}
              value='Gray'
            />
            <RadioSelector
              text={translationPath.values[6]}
              value='Red'
            />
            <RadioSelector
              text={translationPath.values[7]}
              value='White'
            />
            <RadioSelector
              text={translationPath.values[8]}
              value='Other'
            />
          </RadioCollection>
        </fieldset>
      </div>
    </div>
  );
};

export default HairColor;
