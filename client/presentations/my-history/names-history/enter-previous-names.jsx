'use strict';

import React              from 'react';
import TextArea           from '../../text-area.jsx';
import translations       from '../../../i18n'
import { convertToHtml }  from '../../../i18n/convert-to-html.jsx';

const EnterPreviousNames = (props) => {
  if (!props.showIf) { return null; }
  let locale = props.locale;
  return (
    <div className='enter-previous-names'>
      <hr />
      {convertToHtml('h2', translations[locale].myHistory.nameHistoryPage.explanationPrompt, 'question')}
      {convertToHtml('p', translations[locale].myHistory.nameHistoryPage.helpText)}

      <fieldset>
        <TextArea
          {...props}
          identifier='previousNames'
          description={ translations[locale].summaryPage.myHistory.previousNames }
          value      = { props.namesHistory.previousNames }
          errorMessage  = { props.validations.previousNames() }
        />
      </fieldset>
    </div>
  );
};

export default EnterPreviousNames;

