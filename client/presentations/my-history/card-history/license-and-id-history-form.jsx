'use strict';

import React              from 'react';
import radioYesNoGroup    from '../../radio-yes-no-group.jsx';
import RadioCollection    from '../../radio-selector-collection.jsx';
import translations       from '../../../i18n'
import Translation        from '../../../i18n/translate-tag.jsx';

import {
  IDOnly
} from '../../../helpers/data/card-type';

const OnlyIDHeader = (props) => {
  if (!IDOnly(props)) { return null; }
  let locale = props.locale;
  return (
    <div className="applying-for-only-id">
      <Translation tag='h2' className='question'>
        {translations[locale].myHistory.cardHistoryPage.pagePromptID}
      </Translation>
    </div>
  );
};

const IDAndDLHeader = (props) => {
  if (IDOnly(props)) { return null; }
  let locale = props.locale;
  return (
    <div className="applying-for-dl">
      <Translation tag='h2' className='question'>
        {translations[locale].myHistory.cardHistoryPage.pagePromptLicense}
      </Translation>
      <Translation tag='p'>
        {translations[locale].myHistory.cardHistoryPage.explanation}
      </Translation>
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
