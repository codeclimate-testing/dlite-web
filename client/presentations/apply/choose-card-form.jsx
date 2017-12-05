'use strict';

import React from 'react';

import Page                     from '../page.jsx';
import HomeLink                 from '../home-link.jsx';
import CheckBoxInput            from '../checkbox-input.jsx';
import NavigationButtons  from '../navigation-buttons.jsx';

const Form = (props) => {
  return (
    <Page 
      pageTitle={props.pageTitle}
      sectionNumber='1'
      sectionName='My basics'
      {...props}
    >

      <div className='choose-card-form'>
        <h4>What type of card would you like?</h4>

        <form onSubmit={ props.onSubmit } >
          <div className='row inner-bottom'>
            <CheckBoxInput 
              identifier={ 'ID' }
              description='ID'
              onChange={ props.onChange }
              checked={ props.cardType.ID }
            />

            <CheckBoxInput 
              identifier='driverLicense'
              description='Driver License'
              onChange={ props.onChange }
              checked={ props.cardType.driverLicense }
            />

            <div className='unit spacer' />
          </div>

          <NavigationButtons
            {...props}
          />  
        </form>
      </div>
    </Page>
  )
};

export default Form;
