'use strict';

import React              from 'react';
import radioYesNoGroup    from '../../radio-yes-no-group.jsx';
import RadioCollection    from '../../radio-selector-collection.jsx';
import translations       from '../../../i18n'
import { convertToHtml }  from '../../../i18n/convert-to-html.jsx';

const UsedPreviousNames = (props) => {
  let locale = props.locale;
  return (
    <div className='previous-names-form'>
      {convertToHtml('h2', translations[locale].myHistory.nameHistoryPage.pagePrompt, 'question')}
      <div>
        <fieldset>
          <RadioCollection
            {...props}
            name='hasUsedPreviousNames'
          >
            { radioYesNoGroup(locale) }
          </RadioCollection>
        </fieldset>
      </div>
    </div>
  );
};

export default UsedPreviousNames;

