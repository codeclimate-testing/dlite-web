'use strict';

import React from 'react';
import Page               from '../page.jsx';
import RadioCollection    from '../radio-collection.jsx';
import NavigationButtons  from '../navigation-buttons.jsx';


const Form = (props) => {

  return (
    <Page 
      pageTitle='DMV: License application'
      sectionNumber='1'
      sectionName='My basics'
      {...props}
    >
      <div className='minor-dl-message'>
        <h4>Because you’re under 14, you can’t
        apply for a driver license. Would you
        like to get a California ID instead?</h4>

        <form onSubmit={ props.onSubmit } >
          <div className='row inner-bottom'>
            <RadioCollection
              name='ID'
              values={ ['Yes', 'No'] }
              onChange={ props.toggleCardTypes }
              selectedValue={ props.selectedValue }
            />

            { props.children }

            <div className='unit spacer' />
          </div>

          <NavigationButtons
            visible={ props.cardType.ID === true }
            {...props}
          />  
        </form>
      </div>
    </Page>
  )
};

export default Form;
