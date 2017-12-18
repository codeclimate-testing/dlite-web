'use strict';

import React from 'react';

import SelectorCollection from '../selector-collection.jsx';
import NavigationButtons from '../navigation-buttons.jsx';
import Page from '../page.jsx';

const Form = (props) => {
  return (
    <Page
      pageTitle='DMV: License application - My basics'
      sectionNumber='1'
      sectionName='What Do You Want To Do Today'
      {...props}
    >
      <div className='senior-id-form'>
        <p>
          You qualify for a free ID card. The word "Senior Identification Card"
        will be printed on your card.
        </p>
        <h4>Would you like this card for no fee?</h4>

        <div className='row inner-bottom'>
          <SelectorCollection
            name='seniorID'
            values={['Yes', 'No']}
            onChange={props.onChange}
            selectedValue={props.selectedValue}
          />

          <div className='unit spacer' />
        </div>
      </div>

      <NavigationButtons
        {...props}
      />
    </Page>
  )
};

export default Form;
