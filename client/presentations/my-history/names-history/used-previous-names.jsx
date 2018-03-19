'use strict';

import React              from 'react';
import radioYesNoGroup    from '../../radio-yes-no-group.jsx';
import RadioCollection    from '../../radio-selector-collection.jsx';

const UsedPreviousNames = (props) => {
  return (
    <div className='previous-names-form'>
      <fieldset>
        <RadioCollection
          {...props}
          name          = 'hasUsedPreviousNames'
          errorMessage  = { props.validations.hasUsedPreviousNames() }
        >
          { radioYesNoGroup() }
        </RadioCollection>
      </fieldset>
    </div>
  );
};

export default UsedPreviousNames;

