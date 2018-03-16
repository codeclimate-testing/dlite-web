'use strict';

import React              from 'react';
import radioYesNoGroup    from '../../radio-yes-no-group.jsx';
import RadioCollection    from '../../radio-selector-collection.jsx';
import translations       from '../../../i18n'
import Translation        from '../../../i18n/translate-tag.jsx';

const LicenseIssues = (props) => {
  let locale = props.locale;
  return (
    <div className='license-issues-form'>
      <Translation tag='h2' className='question'>
        {translations[locale].myHistory.licenseIssuesPage.pagePrompt}
      </Translation>
      <div>
        <fieldset>
          <RadioCollection
            {...props}
            name          = 'isSuspended'
            errorMessage  = { props.validations.isSuspended() }
          >
            { radioYesNoGroup(locale) }
          </RadioCollection>
        </fieldset>
      </div>
    </div>
  );
};

export default LicenseIssues;
