'use strict';

import React from 'react';

import RadioCollection    from '../radio-collection.jsx';
import NavigationButtons  from '../navigation-buttons.jsx';


const Form = (props) => {

  let changeID = (e) => {
    // send back boolean depending on string value of selected radio
    let answer = e.target.value;

    // change DL entry to false if not already
    if(props.cardType.DL === true) {
      changeDL(e);
    }

    e.target.value = (answer === 'Yes');
    e.target.name = 'ID'
    props.onChange(e);
  };

  let changeDL = (e) => {
    // call onChange with the target name set to 'DL' to change the DL value
    e.target.name = 'DL';
    e.target.value = false;
    props.onChange(e);
  };

  return (
    <div className='minor-dl-message'>
      <h4>Because you’re under 14, you can’t
      apply for a driver license. Would you
      like to get a California ID instead?</h4>

      <form onSubmit={ props.onSubmit } >
        <div className='row inner-bottom'>
          <RadioCollection
            name='ID'
            values={ ['Yes', 'No'] }
            onChange={ changeID }
            selectedValue={ props.cardType.DL === true ? '' : props.cardType.ID === true ? 'Yes' : 'No' }
          />

          {
            props.cardType.DL === false && props.cardType.ID === false &&
            <div>
              <h4>OK, please come back when you turn 14.</h4>
            </div>
          }

          <div className='unit spacer' />
        </div>

        <NavigationButtons
          visible={ props.cardType.ID === true }
          {...props}
        />  
      </form>
    </div>
  )
};

export default Form;
