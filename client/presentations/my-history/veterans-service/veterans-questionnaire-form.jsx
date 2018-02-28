'use strict';

import React              from 'react';
import radioYesNoGroup    from '../../radio-yes-no-group.jsx';
import RadioCollection    from '../../radio-selector-collection.jsx';
import translations       from '../../../i18n'
import { convertToHtml }  from '../../../i18n/convert-to-html.jsx';

const VeteransQuestionnaire = (props) => {
  let locale = props.locale;
  return (
    <div className='veterans-questionnaire-form'>
      {convertToHtml('h2', translations[locale].myHistory.veteransPage.pagePrompt, 'question')}
      {convertToHtml('p', translations[locale].myHistory.veteransPage.explanationStart)}
      <div>
        <fieldset>
          <RadioCollection
            {...props}
            name='isVeteran'
          >
            { radioYesNoGroup(locale) }
          </RadioCollection>
        </fieldset>
      </div>
    </div>
  );
};

export default VeteransQuestionnaire;
