'use strict';

import React from 'react';

import HomeLink         from '../home-link.jsx';
import TextInput        from '../text-input.jsx';
import SuffixSelector   from '../suffix-selector.jsx';
import ContinueButton   from '../continue-button.jsx';

const LegalNameForm = (props) => {
  document.title = props.pageTitle;
  return (
    <div className='legal-name-form'>
      <HomeLink />
      <h3>1 &raquo; My Basics: Who You Are</h3>
      <hr></hr>

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

        <ContinueButton disabled={props.continueDisabled} /> <button type="button" onClick={props.onBack}>Back</button> 
      </form>
    </div>
  );
};

export default LegalNameForm;
