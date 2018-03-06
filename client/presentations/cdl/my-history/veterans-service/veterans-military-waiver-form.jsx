'use strict';

import React              from 'react';
import radioYesNoGroup    from '../../../radio-yes-no-group.jsx';
import RadioCollection    from '../../../radio-selector-collection.jsx';
import translations       from '../../../../i18n'
import { convertToHtml }  from '../../../../i18n/convert-to-html.jsx';

const VeteransMilitaryWaiver = (props) => {
  if (!props.showIf) { return null; }
  let locale = props.locale;
  return (
    <div className='cdl-veterans-military-waiver-form'>
      {convertToHtml('h2','Will you be seeking a military driving experience CDL waiver?', 'question translation-missing')}
      {convertToHtml('p', 'You must have served within the past year.', 'translation-missing')}
      <div>
        <fieldset>
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
