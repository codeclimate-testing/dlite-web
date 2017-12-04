'use strict';

import React from 'react';

import HomeLink                 from '../home-link.jsx';
import CheckBoxInput            from '../checkbox-input.jsx';
import ContinueButton           from '../continue-button.jsx';
import BackButton               from '../back-button.jsx';

const Form = (props) => {
  document.title = props.pageTitle;

  return (
    <div className='choose-card-form'>
      <HomeLink />
      <h3>1 &raquo; My Basics</h3>
      <hr></hr>

      <h4>What type of card would you like?</h4>

      <form onSubmit={ props.onSubmit } >
        <div className='row inner-bottom'>
          <CheckBoxInput 
            identifier={ 'ID' }
            description={ 'ID' }
            onChange={ props.onChange }
            checked={ props.cardType.ID }
          />

          <CheckBoxInput 
            identifier='driverLicense'
            description={ 'Driver License' }
            onChange={ props.onChange }
            checked={ props.cardType.driverLicense }
          />

          <div className='unit spacer' />
        </div>

        <ContinueButton disabled={props.continueDisabled} /> <BackButton onBack={props.onBack} key = 'back-button' />

      </form>
    </div>
  )
};

export default Form;
