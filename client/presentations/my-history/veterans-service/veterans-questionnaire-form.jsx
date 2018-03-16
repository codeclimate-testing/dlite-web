'use strict';

import React              from 'react';
import radioYesNoGroup    from '../../radio-yes-no-group.jsx';
import RadioCollection    from '../../radio-selector-collection.jsx';
import translations       from '../../../i18n'
import Translation        from '../../../i18n/translate-tag.jsx';

const VeteransQuestionnaire = (props) => {
  let locale = props.locale;
  return (
    <div className='veterans-questionnaire-form'>
      <Translation tag='h2' className='question'>
        {translations[locale].myHistory.veteransPage.pagePrompt}
      </Translation>
      <Translation tag='p'>
        {translations[locale].myHistory.veteransPage.explanationStart}
      </Translation>
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
