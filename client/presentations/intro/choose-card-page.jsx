'use strict';

import React from 'react';

import Page               from '../../containers/page.jsx';
import ChooseCardCheckbox from './choose-card/choose-card-checkbox.jsx';
import ChooseCardRadio    from './choose-card/choose-card-radio.jsx';
import NavigationButtons  from '../navigation-buttons.jsx';

const Form = (props) => {
  let question = {
    new: 'What type of card would you like?',
    renew: 'What type of card are you renewing?',
    change: 'What type of card are you correcting or updating?'
  };
 
  return (
    <Page
      {...props}
      sectionKey='intro'
    >
      <div className='choose-card-form'>
        <h2 className='question'>{question[props.cardAction]}</h2>

        <form onSubmit={ props.onSubmit } >
          <ChooseCardCheckbox
            {...props}
          />
          <ChooseCardRadio
            {...props}
          />

          <NavigationButtons {...props} />
        </form>
      </div>
    </Page>
  )
};

export default Form;
