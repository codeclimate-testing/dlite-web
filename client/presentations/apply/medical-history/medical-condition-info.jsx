'use strict';

import React                from 'react';
import RadioSelector        from '../../radio-selector.jsx';
import RadioCollection      from '../../radio-selector-collection.jsx';

const values = {
  Yes: 'Yes',
  No: 'No'
};

const MedicalCondition = (props) => {
  return (
    <div className='medical-condition-form'>
      <h2 className='question'>Have you had any medical conditions in the last three years that affected your ability to drive?</h2>
      <div>
        <RadioCollection    
          {...props}
          name  = 'hasMedicalCondition'
          text  = {values}
          errorMessage = { props.validations.hasMedicalCondition() }
        >
          <RadioSelector 
            value='Yes'
          />
          <RadioSelector 
            value='No'
          />
        </RadioCollection>
      </div>
    </div>
  );
};

export default MedicalCondition;
