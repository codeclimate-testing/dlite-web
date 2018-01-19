'use strict';

import React              from 'react';
import RadioCollection    from '../../radio-selector-collection.jsx';
import RadioSelector      from '../../radio-selector.jsx';

const Form = (props) => {
  let values = {
    Yes: 'Yes',
    No: 'No'
  };

  return (
    <div className='social-security-option-form'>
      <h2 className='question'>Do you have a Social Security Number?</h2>
      <p>If you have a Social Security Number you must select Yes.</p>
        <div className='input-container'>
        <RadioCollection 
            {...props}
            name='hasSocialSecurity'
            text={values}
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

export default Form;
