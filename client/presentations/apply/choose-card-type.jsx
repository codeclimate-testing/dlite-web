'use strict';

import React from 'react';

import HomeLink                 from '../home-link.jsx';
import CheckBoxInput            from '../checkbox-input.jsx';
import ContinueButton           from '../continue-button.jsx';
import BackButton               from '../back-button.jsx';

const VALUES = ['ID', 'Driver License'];

const Form = (props) => {
  document.title = props.pageTitle;

  return (
    <div className='real-id-form'>
      <HomeLink />
      <h3>1 &raquo; My Basics</h3>
      <hr></hr>

      <h4>What type of card would you like?</h4>

      <form onSubmit={ props.onSubmit } >
        <div className='row inner-bottom'>
          <CheckBoxInput 
            identifier={ VALUES[0] }
            description={ VALUES[0] }
            onChange={ props.onChange }
          />

          <CheckBoxInput 
            identifier={ VALUES[1] }
            description={ VALUES[1] }
            onChange={ props.onChange }
          />

          <div className='unit spacer' />
        </div>

        <ContinueButton disabled={props.continueDisabled} /> <BackButton onBack={props.onBack} key = 'back-button' />

      </form>
    </div>
  )
};

export default Form;
