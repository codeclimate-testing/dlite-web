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
        <p>
          You qualify for a free ID card. The word "Senior Identification Card"
          will be printed on your card.
        </p>
        <h4>Would you like this card for no fee?</h4>

        <div className='row inner-bottom'>
          <RadioCollection 
            {...props}
            name='seniorID'
            text={values}
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
          {...props}
        />
      </form>
    </Page>
  )
};

export default Form;
