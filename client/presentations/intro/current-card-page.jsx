'use strict';

import React              from 'react';
import Page               from '../../containers/page.jsx';
import NavigationButtons  from '../navigation-buttons.jsx';
import TextInput          from '../text-input.jsx';
import DateInput          from '../date-input.jsx';

const question = {
  ID: (<p>If you know it, <b>please enter your California ID number</b>.</p>),
  DL: (<p>If you know it, <b>please enter your California Driver License number</b>.</p>)
};

const instruction = {
  ID: (<p>Your number can be found at the top of your ID, starting with a letter.</p>),
  DL: (<p>Your number can be found at the top of your Driver License, starting with a letter.</p>)
};

const card = {
  ID: 'ID',
  DL: 'Driver License'
}

const Form = (props) => {
  const IDorDL          = props.cardType[props.cardAction];
  const cardText        = card[IDorDL] 
  const questionText    = question[IDorDL];
  const instructionText = instruction[IDorDL];
  
  return (
    <Page
      {...props}
      sectionKey='intro'
    >
      <div className='current-card-form'>
        <h2 className='question pad-bottom-10'>Card details</h2>
        {questionText}
        {instructionText}
        
        <form onSubmit={ props.onSubmit }>

          <div className='row inner-bottom'>
            <TextInput
              {...props}
              identifier='number'
              description={ `${cardText.toUpperCase()} CARD NUMBER` }
              value={ props.currentCardInfo.number }
              errorMessage={ props.currentCardValidation.number() }
              onChange={props.onChange}
              onBlur={props.onBlurValidate}
              onFocus={props.onFocusClearValidation}
            />
          </div>

          <label htmlFor='expirationDate'> EXPIRATION DATE </label>
          <div id='expirationDate' className='row inner-bottom'>
          <DateInput
            {...props}
            description = 'Expiration Date'
            onBlur      = { props.onBlurValidate }
            onFocus     = { props.onFocusClearValidation }
            values      = { props.currentCardInfo }
            validations = { props.currentCardValidation }
          />
          </div>

          <NavigationButtons
            {...props}
            errorMessage={ props.currentCardValidation.all() }
          />
        </form>
      </div>
    </Page>
  )
};

export default Form;
