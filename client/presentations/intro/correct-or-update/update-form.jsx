'use strict';

import React                from 'react';
import CheckboxCollection   from '../../checkbox-selector-collection.jsx';
import CheckboxSelector     from '../../checkbox-selector.jsx';

const Form = (props) => {

  if(props.cardUpdates.correctOrUpdate !== 'update'){ return null; }
  
  let text = {
    name:         'Name',
    dateOfBirth:  'Date of birth',
    sex:          'Sex',
    address:      'Address',
    licenseType:  'What you can drive',
    endorsements: 'Endorsements on your license',
    restrictions: 'Add or remove a restriction',
    other:        'Something else'
  };

  return (
    <div className='row inner-bottom update-form'>
      <h4>What would you like to update?</h4>
      <p>Select all that apply.</p>

      <CheckboxCollection 
        {...props}
        name  = 'sections'
        array = { props.cardUpdates }
        text  = { text }
      >
        <CheckboxSelector
          value='name'
        />

        <CheckboxSelector
          value='dateOfBirth'
        />

        <CheckboxSelector
          value='sex'
        />

        <CheckboxSelector
          value='address'
        />

        <CheckboxSelector
          value='licenseType'
        />

        <CheckboxSelector
          value='endorsements'
        />

        <CheckboxSelector
          value='restrictions'
        />

        <CheckboxSelector
          value='other'
        />
      </CheckboxCollection>
      <div className='unit spacer' />
    </div>
  )
};

export default Form;
