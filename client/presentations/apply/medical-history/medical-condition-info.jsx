'use strict';

import React from 'react';
import SelectorCollection from '../../selector-collection.jsx';

const MedicalCondition = (props) => {
  return (
    <div className='medical-condition-form'>
        <h4>Have you had any medical conditions in the last three years that affected your ability to drive?</h4>
      <div className='inner-bottom'>
        <SelectorCollection
          name='hasMedicalCondition'
          values={['Yes', 'No']}
          onChange={ props.onChange }
          selectedValue={ props.selectedValue }
        />
      </div>
    </div>
  );
};

export default MedicalCondition;
