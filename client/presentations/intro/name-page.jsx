'use strict';

import React from 'react';

import Page               from '../../containers/page.jsx';
import TextInput          from '../text-input.jsx';
import SuffixSelector     from '../suffix-selector.jsx';
import NavigationButtons  from '../navigation-buttons.jsx';

const LegalNameForm = (props) => {
  return (
    <Page
      sectionKey='intro'
      {...props}
    >
      <div className='legal-name-form'>
        <h4>What's your full, legal name?</h4>
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
    </Page>
  );
};

export default LegalNameForm;
