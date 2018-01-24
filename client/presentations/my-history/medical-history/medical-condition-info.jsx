'use strict';

import React                from 'react';
import radioYesNoGroup      from '../../radio-yes-no-group.jsx';
import RadioCollection      from '../../radio-selector-collection.jsx';

const MedicalCondition = (props) => {
  return (
    <div className='medical-condition-form'>
      <h2 className='question'>Have you had any medical conditions in the last three years that affected your ability to drive?</h2>
      <div>
        <RadioCollection
          {...props}
          name  = 'hasMedicalCondition'
          errorMessage = { props.validations.hasMedicalCondition() }
        >
          { radioYesNoGroup() }
        </RadioCollection>
      </div>
    </div>
  );
};

export default MedicalCondition;
