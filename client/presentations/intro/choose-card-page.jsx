'use strict';

import React from 'react';

import Page               from '../page.jsx';
import CheckboxSelector   from '../checkbox-selector.jsx';
import NavigationButtons  from '../navigation-buttons.jsx';

const Form = (props) => {
  return (
    <Page
      {...props}
      pageTitle='DMV: License application'
      sectionNumber='1'
      sectionName='My basics'
    >
      <div className='choose-card-form'>
        <h4>What type of card would you like?</h4>

        <form onSubmit={ props.onSubmit } >
          <div className='row inner-bottom'>
            <CheckboxSelector
              {...props}
              selected={props.cardType.ID}
              value='ID'
              text='ID'
            />

            <CheckboxSelector
              {...props}
              selected={props.cardType.DL}
              value='DL'
              text='Driver License'
            />

            <div className='unit spacer' />
          </div>

          <NavigationButtons {...props} />
        </form>
      </div>
    </Page>
  )
};

export default Form;
