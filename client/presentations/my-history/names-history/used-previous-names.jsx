'use strict';

import React              from 'react';
import radioYesNoGroup    from '../../radio-yes-no-group.jsx';
import RadioCollection    from '../../radio-selector-collection.jsx';

const UsedPreviousNames = (props) => {
  let locale = props.locale;
  return (
    <div className='previous-names-form'>
      <fieldset>
        <RadioCollection
          {...props}
          name='hasUsedPreviousNames'
          errorMessage  = { props.validations.hasUsedPreviousNames() }
        >
          { radioYesNoGroup(locale) }
        </RadioCollection>
      </fieldset>
    </div>
  );
};

export default UsedPreviousNames;

