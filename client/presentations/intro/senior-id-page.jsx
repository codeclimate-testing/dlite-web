'use strict';

import React from 'react';

import RadioCollection    from '../radio-selector-collection.jsx';
import RadioSelector      from '../radio-selector.jsx';
import NavigationButtons  from '../navigation-buttons.jsx';
import Page               from '../../containers/page.jsx';

const Form = (props) => {
  let values = {
    Yes: 'Yes',
    No: 'No'
  };

  return (
    <Page
      {...props}
      sectionKey='intro'
    >
      <form onSubmit={props.onSubmit} className='senior-id-form'>
        <p className='pad-bottom-10'>
          You qualify for a free ID card. The word "Senior Identification Card"
          will be printed on your card.
        </p>
        <h2 className='question pad-bottom-20'>Would you like this card for no fee?</h2>

        <div className='row inner-bottom'>
          <RadioCollection 
            {...props}
            name    = 'seniorID'
            text    = { values }
            onBlur  = { props.onBlurValidate }
            errorMessage = {props.validations.seniorID() }
          >
            <RadioSelector
              value='Yes'
            />
            <RadioSelector
              value='No'
            />
          </RadioCollection>
 
        </div>

        <NavigationButtons
          errorMessage = {props.validations.seniorID() }
          {...props}
        />
      </form>
    </Page>
  )
};

export default Form;
