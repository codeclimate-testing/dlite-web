'use strict';

import React from 'react';

import HomeLink  from './home-link.jsx';
import TextInput from './text-input.jsx';

const LegalNameForm = (props) => {
  return (
    <div className='legal-name-form'>
      <HomeLink />
      <form onSubmit={props.onSubmit}>
        <TextInput
          identifier='firstName'
          description='First name'
          value={props.legalName.firstName}
          onChange={props.onChange}
        />

        <TextInput
          identifier='middleName'
          description='Middle name'
          value={props.legalName.middleName}
          onChange={props.onChange}
        />

        <TextInput
          identifier='lastName'
          description='Last name'
          value={props.legalName.lastName}
          onChange={props.onChange}
        />

        <input type="submit" name="submitNamesButton" value="Submit" />
      </form>
    </div>
  )
};

export default LegalNameForm;
