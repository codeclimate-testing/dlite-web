'use strict';

import React                from 'react';
import RadioSelector        from '../../radio-selector.jsx';
import RadioCollection      from '../../radio-selector-collection.jsx';

const MedicalCondition = (props) => {
  let values = {
    Yes: 'Yes',
    No: 'No'
  };

  return (
    <div className='medical-condition-form'>
        <h4>Have you had any medical conditions in the last three years that affected your ability to drive?</h4>
      <div className='inner-bottom'>
        <RadioCollection    
          {...props}
          name  = 'hasMedicalCondition'
          text  = {values}
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
