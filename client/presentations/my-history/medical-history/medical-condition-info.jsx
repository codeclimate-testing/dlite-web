'use strict';

import React              from 'react';
import radioYesNoGroup    from '../../radio-yes-no-group.jsx';
import RadioCollection    from '../../radio-selector-collection.jsx';

const MedicalCondition = (props) => {

  return (
    <div className='medical-condition-form'>
      <fieldset>
        <RadioCollection
          {...props}
          name  = 'hasMedicalCondition'
          errorMessage = { props.validations.hasMedicalCondition() }
        >
          { radioYesNoGroup() }
        </RadioCollection>
      </fieldset>
    </div>
  );
};

export default MedicalCondition;
