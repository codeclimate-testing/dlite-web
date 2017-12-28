'use strict';

import React              from 'react';
import Page               from '../../containers/page.jsx';
import NavigationButtons  from '../navigation-buttons.jsx';
import TextInput          from '../text-input.jsx';
import NumberInput        from '../number-input.jsx';
import { prettyDL }       from '../../helpers/data/card-type';

const Form = (props) => {
  let card = prettyDL(props);
  return (
    <Page
      {...props}
      sectionKey='intro'
    >
      <div className='current-card-form'>
        <p>If you know it, <b>please enter your California {card} number</b>.</p>
        <p>Your number can be found at the top of your {card}, starting with a letter.</p>
        
        <form onSubmit={ props.onSubmit }>

          <div className='row inner-bottom'>
            <TextInput
              {...props}
              identifier='number'
              description={ `${card.toUpperCase()} CARD NUMBER` }
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