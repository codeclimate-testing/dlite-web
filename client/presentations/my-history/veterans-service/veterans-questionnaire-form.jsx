'use strict';

import React              from 'react';
import radioYesNoGroup    from '../../radio-yes-no-group.jsx';
import RadioCollection    from '../../radio-selector-collection.jsx';
import Translator         from '../../../i18n/translator-tag.jsx';

const VeteransQuestionnaire = (props) => {

  return (
    <div className='veterans-questionnaire-form'>
      <Translator
        tag             = 'h2'
        className       = 'question'
        translationPath = 'myHistory.veteransPage.pagePrompt'
      />
      <Translator
        tag             = 'p'
        translationPath = 'myHistory.veteransPage.explanationStart'
      />
      <div>
        <fieldset role='group' aria-label='Are you a veteran?'>
          <RadioCollection
            {...props}
            name  = 'isVeteran'
          >
            { radioYesNoGroup() }
          </RadioCollection>
        </fieldset>
      </div>
    </div>
    );
};

export default VeteransQuestionnaire;
