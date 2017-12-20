'use strict';

import React from 'react';

import SelectorCollection from '../selector-collection.jsx';
import NavigationButtons  from '../navigation-buttons.jsx';
import Page               from '../../containers/page.jsx';

const Form = (props) => {
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
          <SelectorCollection
            name='seniorID'
            values={['Yes', 'No']}
            selectedValue={props.seniorID}
            onChange={props.onChange}
          />
        </div>

        <NavigationButtons
          {...props}
        />
      </form>
    </Page>
  )
};

export default Form;
