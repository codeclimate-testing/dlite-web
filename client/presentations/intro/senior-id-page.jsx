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
        <h2 className='question'>Senior identification card</h2>
        <p>
          You qualify for a free ID card. The word "Senior Identification Card"
          will be printed on your card.
        </p>

        <h3 className='question'>Would you like this card for no fee?</h3>

        <div className='row'>
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
