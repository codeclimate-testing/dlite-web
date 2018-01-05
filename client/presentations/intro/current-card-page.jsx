'use strict';

import React              from 'react';
import Page               from '../../containers/page.jsx';
import NavigationButtons  from '../navigation-buttons.jsx';
import TextInput          from '../text-input.jsx';
import NumberInput        from '../number-input.jsx';

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
        {questionText}
        {instructionText}
        
        <form onSubmit={ props.onSubmit }>

          <div className='row inner-bottom'>
            <TextInput
              {...props}
              identifier='number'
              description={ `${cardText.toUpperCase()} CARD NUMBER` }
              value={ props.currentCardInfo.number }
            />
          </div>

          <label htmlFor='expirationDate'> EXPIRATION DATE </label>
          <div id='expirationDate' className='row inner-bottom'>
            <NumberInput
              {...props}
              identifier='month'
              description='MM'
              value={props.currentCardInfo.month}
            />

            <div className='unit spacer' />

            <NumberInput
              {...props}
              identifier='day'
              description='DD'
              value={props.currentCardInfo.day}
            />

            <div className='unit spacer' />

            <NumberInput
              {...props}
              identifier='year'
              description='YYYY'
              value={props.currentCardInfo.year}
            />
          </div>

          <NavigationButtons {...props} />
        </form>
      </div>
    </Page>
  )
};

export default Form;