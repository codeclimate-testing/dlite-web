'use strict';

import React              from 'react';
import radioYesNoGroup    from '../../../radio-yes-no-group.jsx';
import RadioCollection    from '../../../radio-selector-collection.jsx';
import Translator         from '../../../../i18n/translator-tag.jsx';

const VeteransMilitaryWaiver = (props) => {
  if (!props.showIf) { return null; }

  return (
    <div className='veterans-military-waiver-form'>
      <Translator
        tag             = 'h2'
        className       = 'question'
        translationPath = 'newApproved.cdl.myHistory.veteran.militaryWaiver.prompt'
      />
      <Translator
        tag             = 'p'
        translationPath = 'newApproved.cdl.myHistory.veteran.militaryWaiver.explanation'
      />
      <div>
        <fieldset role='group' aria-label='Military waiver choice'>
          <RadioCollection
            {...props}
            name='militaryWaiver'
          >
            { radioYesNoGroup() }
          </RadioCollection>
        </fieldset>
      </div>
    </div>
  );
};

export default VeteransMilitaryWaiver;
