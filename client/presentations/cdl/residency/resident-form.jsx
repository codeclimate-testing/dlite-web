'use strict';

import React                    from 'react';
import radioYesNoGroup          from '../../radio-yes-no-group.jsx';
import RadioCollection          from '../../radio-selector-collection.jsx';

const ResidencyRadios = (props) => {
  return (
    <fieldset role='group' aria-label='California residency choice'>
      <RadioCollection
        {...props}
        name  = 'isResident'
      >
        { radioYesNoGroup(props.locale) }
      </RadioCollection>
    </fieldset>
  );
};

export default ResidencyRadios;
