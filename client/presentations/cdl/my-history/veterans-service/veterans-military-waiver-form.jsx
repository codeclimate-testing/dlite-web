'use strict';

import React              from 'react';
import radioYesNoGroup    from '../../../radio-yes-no-group.jsx';
import RadioCollection    from '../../../radio-selector-collection.jsx';

const VeteransMilitaryWaiver = (props) => {
  if (!props.showIf) { return null; }

  return (
    <div className='veterans-military-waiver-form'>
      <h2 className='question translation-missing'>
        Will you be seeking a military driving experience CDL waiver?
      </h2>
      <p className='translation-missing'>
        You must have served within the past year.
      </p>
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
