'use strict';

import React              from 'react';
import radioYesNoGroup    from '../../radio-yes-no-group.jsx';
import RadioCollection    from '../../radio-selector-collection.jsx';
import Translator         from '../../../i18n/translator-tag.jsx';

const LicenseIssues = (props) => {

  return (
    <div className='license-issues-form'>
      <Translator
        tag             = 'h2'
        className       = 'question'
        translationPath = 'myHistory.licenseIssuesPage.pagePrompt'
        tabIndex        = '0'
      />
      <div>
        <fieldset role='group' aria-label='License issue choice'>
          <RadioCollection
            {...props}
            name          = 'isSuspended'
            errorMessage  = { props.validations.isSuspended() }
          >
            { radioYesNoGroup() }
          </RadioCollection>
        </fieldset>
      </div>
    </div>
  );
};

export default LicenseIssues;
