'use strict';

import React              from 'react';
import radioYesNoGroup    from '../../../radio-yes-no-group.jsx';
import RadioCollection    from '../../../radio-selector-collection.jsx';

const OtherStateLicenseInfo = (props) => {
  let locale = props.locale;
  return (
    <div className='other-state-licenses-form'>
      <fieldset>
        <RadioCollection
          {...props}
          name='hasNonCALicense'
          errorMessage  = { props.validations.hasNonCALicense() }
        >
          { radioYesNoGroup(locale) }
        </RadioCollection>
      </fieldset>
    </div>
  );
};

export default OtherStateLicenseInfo;
