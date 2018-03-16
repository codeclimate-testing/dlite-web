'use strict';

import React              from 'react';
import TextArea           from '../../text-area.jsx';
import translations       from '../../../i18n'
import Translation        from '../../../i18n/translate-tag.jsx';

const EnterPreviousNames = (props) => {
  if (!props.showIf) { return null; }
  let locale = props.locale;
  return (
    <div className='enter-previous-names'>
      <hr />
      <Translation tag='h2' className='question'>
        {translations[locale].myHistory.nameHistoryPage.explanationPrompt}
      </Translation>
      <Translation tag='p'>
        {translations[locale].myHistory.nameHistoryPage.helpText}
      </Translation>

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

