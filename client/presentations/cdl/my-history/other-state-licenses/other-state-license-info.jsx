'use strict';

import React              from 'react';
import radioYesNoGroup    from '../../../radio-yes-no-group.jsx';
import RadioCollection    from '../../../radio-selector-collection.jsx';

const OtherStateLicenseInfo = (props) => {
  return (
    <div className='other-state-licenses-form'>
      <fieldset role='group' aria-label='Out of state license choice'>
        <RadioCollection
          {...props}
          name='hasNonCALicense'
          errorMessage  = { props.validations.hasNonCALicense() }
        >
          { radioYesNoGroup() }
        </RadioCollection>
      </fieldset>
    </div>
  );
};

export default OtherStateLicenseInfo;
