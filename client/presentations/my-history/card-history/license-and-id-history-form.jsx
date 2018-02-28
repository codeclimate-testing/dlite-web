'use strict';

import React              from 'react';
import radioYesNoGroup    from '../../radio-yes-no-group.jsx';
import RadioCollection    from '../../radio-selector-collection.jsx';
import translations       from '../../../i18n'
import { convertToHtml }  from '../../../i18n/convert-to-html.jsx';

import {
  IDOnly
} from '../../../helpers/data/card-type';

const OnlyIDHeader = (props) => {
  if (!IDOnly(props)) { return null; }
  let locale = props.locale;
  return (
    <div className="applying-for-only-id">
      {convertToHtml('h2', translations[locale].myHistory.cardHistoryPage.pagePromptID, 'question')}
    </div>
  );
};

const IDAndDLHeader = (props) => {
  if (IDOnly(props)) { return null; }
  let locale = props.locale;
  return (
    <div className="applying-for-dl">
      {convertToHtml('h2', translations[locale].myHistory.cardHistoryPage.pagePromptLicense, 'question')}
      {convertToHtml('p', translations[locale].myHistory.cardHistoryPage.explanation)}
    </div>
  );
};


const LicenseAndIdHistory = (props) => {
  let locale = props.locale;
  return (
    <div className='license-and-id-history-form'>
      <OnlyIDHeader
        {...props}
        cardType = {props.cardType}
      />
      <IDAndDLHeader
        {...props}
        cardType = {props.cardType}
      />

      <div>
        <fieldset>
          <RadioCollection
            {...props}
            name='isIssued'
            errorMessage = { props.validations.isIssued() }
          >
            { radioYesNoGroup(locale) }
          </RadioCollection>
        </fieldset>
      </div>
    </div>
  );
};

export default LicenseAndIdHistory;
