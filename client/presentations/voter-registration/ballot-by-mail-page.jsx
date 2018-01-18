'use strict';

import React                from 'react';
import NavigationButtons    from '../navigation-buttons.jsx';
import RadioSelector        from '../radio-selector.jsx';
import RadioCollection      from '../radio-selector-collection.jsx';
import MessageBox           from '../message-box.jsx';
import Page                 from '../../containers/page.jsx';

const infoText = {
  Yes: 'Ok, your ballot will now come by mail. You can still vote in-person at your polling place.',
  No: 'Ok, you vote in-person at your polling place.'
};

const InfoMessage = (props) => {
  if(!props.selectedValue) { return null; }
  return (
    <MessageBox className = 'info'>
      <p>{infoText[props.selectedValue]}</p>
    </MessageBox>
  )
};

const values = {
  Yes: 'Yes',
  No: 'No'
};

const BallotByMailPage = (props) => {

  return (
    <Page
      {...props}
      sectionKey={props.prereg}
    >
      <form onSubmit={props.onSubmit} className = 'ballot-by-mail-form'>
        <h2 className='question'>Would you like to get your ballot by mail before each election?</h2>
        <p>If you answer Yes, you can still vote in-person.</p>
        
        <RadioCollection 
          {...props}
          name          = 'ballotByMail'
          text          = {values}
          errorMessage  = {props.validations.ballotByMail() }
        >
          <RadioSelector 
            value='Yes'
          />
          <RadioSelector 
            value='No'
          />
        </RadioCollection>

        <InfoMessage 
          selectedValue = { props.selectedValue }
        />

        <NavigationButtons 
          {...props} 
          errorMessage = { props.validations.all() }
        />
      </form>
    </Page>
  )
};

export default BallotByMailPage;
