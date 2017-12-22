'use strict';

import React              from 'react';
import SelectorCollection from '../../selector-collection.jsx';

const Form = (props) => {
  return (
    <div className='social-security-option-form'>
      <h4>Do you have a Social Security Number?</h4>
      <h5>If you have a Social Security Number you must select Yes.</h5>
        <div className='input-container'>
          <SelectorCollection
            name='hasSocialSecurity'
            values={['Yes', 'No']}
            onChange={ props.onChange }
            selectedValue={props.selectedValue}
          />
        </div>
    </div>
  );
};

export default Form;
