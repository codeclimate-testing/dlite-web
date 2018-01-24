'use strict';

import React                from 'react';
import CheckboxCollection   from '../../checkbox-selector-collection.jsx';
import CheckboxSelector     from '../../checkbox-selector.jsx';

const Form = (props) => {

  if(!props.cardChanges.correctOrUpdate ){ return null; }

  const text = {
    name          : 'Name',
    dateOfBirth   : 'Date of birth',
    sex           : 'Sex',
    address       : 'Address',
    licenseType   : 'What you can drive',
    endorsements  : 'Endorsements on your license',
    restrictions  : 'Add or remove a restriction',
    other         : 'Something else'
  };

  const correctHeader   = 'What would you like to correct?';
  const updateHeader    = 'What would you like to update?';
  const headerText      = props.cardChanges.correctOrUpdate === 'correct' ? correctHeader : updateHeader;

  return (
    <div className='row change-sections-form'>
      <hr/>
      <h3 className='question'>{headerText}</h3>
      <p>Select all that apply.</p>

      <CheckboxCollection
        {...props}
        name          = 'sections'
        array         = { props.cardChanges }
        text          = { text }
        errorMessage  = { props.validations.sections() }
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
    </div>
  )
};

export default Form;
