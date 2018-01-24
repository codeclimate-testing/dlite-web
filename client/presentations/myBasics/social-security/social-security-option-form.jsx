'use strict';

import React              from 'react';
import RadioCollection    from '../../radio-selector-collection.jsx';
import radioYesNoGroup    from '../../radio-yes-no-group.jsx';

const Form = (props) => {
  return (
    <div className='social-security-option-form'>
      <h2 className='question'>Do you have a Social Security Number?</h2>
      <p>If you have a Social Security Number you must select Yes.</p>
        <div className='input-container'>
        <RadioCollection
          {...props}
          name='hasSocialSecurity'
          errorMessage={ props.validations.ssn() }
        >
          { radioYesNoGroup() }
        </RadioCollection>
      </div>
    </div>
  );
};

export default Form;
