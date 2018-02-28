'use strict';

import React              from 'react';
import radioYesNoGroup    from '../../radio-yes-no-group.jsx';
import RadioCollection    from '../../radio-selector-collection.jsx';
import translations       from '../../../i18n'
import { convertToHtml }  from '../../../i18n/convert-to-html.jsx';

const LicenseIssues = (props) => {
  let locale = props.locale;
  return (
    <div className='license-issues-form'>
      {convertToHtml('h2', translations[locale].myHistory.licenseIssuesPage.pagePrompt, 'question')}
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
