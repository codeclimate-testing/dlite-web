'use strict';

import React              from 'react';
import radioYesNoGroup    from '../../radio-yes-no-group.jsx';
import RadioCollection    from '../../radio-selector-collection.jsx';
import Translator         from '../../../i18n/translator-tag.jsx';

import {
  IDOnly
} from '../../../helpers/data/card-type';

const OnlyIDHeader = (props) => {
  if (!IDOnly(props)) { return null; }

  return (
    <div className="applying-for-only-id">
      <Translator
        tag             = 'h2'
        className       = 'question'
        translationPath = 'myHistory.cardHistoryPage.pagePromptID'
      />
    </div>
  );
};

const IDAndDLHeader = (props) => {
  if (IDOnly(props)) { return null; }

  return (
    <div className="applying-for-dl">
      <Translator
        tag             = 'h2'
        className       = 'question'
        translationPath = 'myHistory.cardHistoryPage.pagePromptLicense'
      />
      <Translator
        tag             = 'p'
        translationPath = 'myHistory.cardHistoryPage.explanation'
      />
    </div>
  );
};


const LicenseAndIdHistory = (props) => {

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
        <fieldset role='group' aria-label='License and id history'>
          <RadioCollection
            {...props}
            name          = 'isIssued'
            errorMessage  = { props.validations.isIssued() }
          >
            { radioYesNoGroup() }
          </RadioCollection>
        </fieldset>
      </div>
    </div>
  );
};

export default LicenseAndIdHistory;
