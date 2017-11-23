'use strict';

import React from 'react';

import HomeLink           from '../home-link.jsx';
import TextInput          from '../text-input.jsx';
import SuffixSelector     from '../suffix-selector.jsx';
import NavigationButtons  from '../navigation-buttons.jsx';
import SectionHeader      from '../section-header.jsx';

const LegalNameForm = (props) => {
  document.title = props.pageTitle;
  return (
    <div className='legal-name-form'>
      <HomeLink />
      <SectionHeader
        number='1'
        name='My basics'
      />

      <h4>What’s your full, legal name?</h4>
      <form onSubmit={props.onSubmit}>
        <TextInput
          identifier='firstName'
          description='First Name'
          value={props.legalName.firstName}
          onChange={props.onChange}
        />

        <TextInput
          identifier='middleName'
          description='Middle Name(s)'
          value={props.legalName.middleName}
          onChange={props.onChange}
        />

        <TextInput
          identifier='lastName'
          description='Last Name'
          value={props.legalName.lastName}
          onChange={props.onChange}
        />

        <SuffixSelector
          identifier='suffix'
          value={ props.legalName.suffix }
          onChange={props.onChange}
        />

        <NavigationButtons {...props} />
      </form>
    </div>
  );
};

export default LegalNameForm;
