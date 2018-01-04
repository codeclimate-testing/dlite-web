'use strict';

import React                from 'react';
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

      <CheckboxSelector
        {...props}
        name='sections'
        value='name'
        text={text.name}
        selected={props.cardUpdates.sections.indexOf('name')> -1}
      />

      <CheckboxSelector
        {...props}
        name='sections'
        value='dateOfBirth'
        text={text.dateOfBirth}
      />

      <CheckboxSelector
        {...props}
        name='sections'
        value='sex'
        text={text.sex}
      />

      <CheckboxSelector
        {...props}
        name='sections'
        value='address'
        text={text.address}
      />

      <CheckboxSelector
        {...props}
        name='sections'
        value='licenseType'
        text={text.licenseType}
      />

      <CheckboxSelector
        {...props}
        name='sections'
        value='endorsements'
        text={text.endorsements}
      />

      <CheckboxSelector
        {...props}
        name='sections'
        value='restrictions'
        text={text.restrictions}
      />

      <CheckboxSelector
        {...props}
        name='sections'
        value='other'
        text={text.other}
      />
      <div className='unit spacer' />
    </div>
  )
};

export default Form;
