'use strict';

import React from 'react';
import SelectorCollection from '../selector-collection.jsx';

const values = ['Yes', 'No'];

const MedicalCondition = (props) => {
  document.title = props.pageTitle;
  return (
    <div className='medical-info'>
      <h4>Have you had any medical conditions in the last three years that affected your ability to drive?</h4>
        <div className='inner-bottom'>
          <SelectorCollection
            name='hasMedicalCondition'
            values={values}
            onChange={ props.onChange }
            selectedValue={ props.selectedValue }
          />
        </div>
    </div>
  );
};

export default MedicalCondition;
