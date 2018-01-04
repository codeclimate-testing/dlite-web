'use strict';

import React                from 'react';
import CheckboxSelector     from '../../checkbox-selector.jsx';
import { includes }         from '../../../helpers/data/validations';

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

  let array = props.cardUpdates.sections;

  return (
    <div className='row inner-bottom update-form'>
      <h4>What would you like to update?</h4>
      <p>Select all that apply.</p>

      <CheckboxSelector
        {...props}
        name='sections'
        value='name'
        text={text.name}
        selected={includes(array, 'name')}
      />

      <CheckboxSelector
        {...props}
        name='sections'
        value='dateOfBirth'
        text={text.dateOfBirth}
        selected={includes(array, 'dateOfBirth')}
      />

      <CheckboxSelector
        {...props}
        name='sections'
        value='sex'
        text={text.sex}
        selected={includes(array, 'sex')}
      />

      <CheckboxSelector
        {...props}
        name='sections'
        value='address'
        text={text.address}
        selected={includes(array, 'address')}
      />

      <CheckboxSelector
        {...props}
        name='sections'
        value='licenseType'
        text={text.licenseType}
        selected={includes(array, 'licenseType')}
      />

      <CheckboxSelector
        {...props}
        name='sections'
        value='endorsements'
        text={text.endorsements}
        selected={includes(array, 'endorsements')}
      />

      <CheckboxSelector
        {...props}
        name='sections'
        value='restrictions'
        text={text.restrictions}
        selected={includes(array, 'restrictions')}
      />

      <CheckboxSelector
        {...props}
        name='sections'
        value='other'
        text={text.other}
        selected={includes(array, 'other')}
      />
      <div className='unit spacer' />
    </div>
  )
};

export default Form;
