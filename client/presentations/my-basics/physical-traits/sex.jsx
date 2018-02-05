'use strict';

import React                from 'react';
import RadioCollection      from '../../radio-selector-collection.jsx';
import RadioSelector        from '../../radio-selector.jsx';
import translations         from '../../../i18n';

const translationPath = translations.myBasics.traitsPage.sex;

const Sex = (props) => {
  return (
    <div className="sex">
      <h2 className='question'>{translationPath.prompt}</h2>
      <div>
        <fieldset>
          <RadioCollection
            {...props}
            name='sex'
          >
            <RadioSelector
              value='Female'
              text={translationPath.values[1]}
            />
            <RadioSelector
              value='Male'
              text={translationPath.values[0]}
            />
          </RadioCollection>
        </fieldset>
      </div>
    </div>
  );
};

export default Sex;
