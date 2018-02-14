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
  return (
    <div className="applying-for-only-id">
      {convertToHtml('h2', translations.myHistory.cardHistoryPage.pagePromptID, 'question')}
    </div>
  );
};

const IDAndDLHeader = (props) => {
  if (IDOnly(props)) { return null; }
  return (
    <div className="applying-for-dl">
      {convertToHtml('h2', translations.myHistory.cardHistoryPage.pagePromptLicense, 'question')}
      {convertToHtml('p', translations.myHistory.cardHistoryPage.explanation)}
    </div>
  );
};


const LicenseAndIdHistory = (props) => {
  return (
    <div className='license-and-id-history-form'>
      <OnlyIDHeader cardType = {props.cardType} />
      <IDAndDLHeader cardType = {props.cardType} />

      <div>
        <fieldset>
          <RadioCollection
            {...props}
            name='isIssued'
            errorMessage = { props.validations.isIssued() }
          >
            { radioYesNoGroup() }
          </RadioCollection>
        </fieldset>
      </div>
    </div>
  );
};

export default LicenseAndIdHistory;
