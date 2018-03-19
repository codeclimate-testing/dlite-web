'use strict';

import React              from 'react';
import radioYesNoGroup    from '../../../radio-yes-no-group.jsx';
import RadioCollection    from '../../../radio-selector-collection.jsx';
import translations       from '../../../../i18n'
import Translation        from '../../../../i18n/translate-tag.jsx';

const VeteransMilitaryWaiver = (props) => {
  if (!props.showIf) { return null; }
  let locale = props.locale;
  return (
    <div className='veterans-military-waiver-form'>
      <Translation tag='h2' className='question translation-missing'>
        Will you be seeking a military driving experience CDL waiver?
      </Translation>
      <Translation tag='p' className='translation-missing'>
        You must have served within the past year.
      </Translation>
      <div>
        <fieldset role='group' aria-label='Military waiver choice'>
          <RadioCollection
            {...props}
            name='militaryWaiver'
          >
            { radioYesNoGroup(locale) }
          </RadioCollection>
        </fieldset>
      </div>
    </div>
  );
};

export default VeteransMilitaryWaiver;
