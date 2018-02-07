'use strict';

import React              from 'react';
import RadioCollection    from '../../radio-selector-collection.jsx';
import RadioSelector      from '../../radio-selector.jsx';
import translations       from '../../../i18n';
import { convertToHtml }  from '../../../i18n/convert-to-html.jsx';

const translationPath = translations.myBasics.traitsPage.sex;

const Sex = (props) => {
  return (
    <div className="sex">
        {convertToHtml('h2', translationPath.prompt, 'question')}
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
