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
        <h4>{props.title}</h4>

        <h5>{props.paragraph}</h5>

        <h4>{props.question}</h4>
        <form onSubmit={ props.onSubmit } >
          <h4>{props.endMessage }</h4>
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
            visible = { props.visibleNext }
            {...props}
          />  
        </form>
      </div>
    </Page>
  )
};

export default Form;
