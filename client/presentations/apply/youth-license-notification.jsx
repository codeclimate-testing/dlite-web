'use strict';

import React from 'react';
import Page               from '../page.jsx';
import RadioCollection    from '../radio-collection.jsx';
import NavigationButtons  from '../navigation-buttons.jsx';


const Form = (props) => {

  const handleChange = (e) => {
    props.onChange(e); // update props.cardType.youthIDInstead
    props.checkAnswer(e.target.value, false); // update props.cardType.DL
  }


  return (
    <Page 
      pageTitle='DMV: License application'
      sectionNumber='1'
      sectionName='My basics'
      {...props}
    >
      <div className='youth-license-notification'>

        { props.children }

        <form onSubmit={ props.onSubmit } >
          
          <div className='row inner-bottom'>
            <RadioCollection
              name='youthIDInstead'
              values={ ['Yes', 'No'] }
              onChange={ handleChange }
              selectedValue={ props.selectedValue }
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
