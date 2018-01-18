'use strict';

import React                    from 'react';
import NavigationButtons        from '../navigation-buttons.jsx';
import RadioSelector            from '../radio-selector.jsx';
import RadioCollection          from '../radio-selector-collection.jsx';
import Page                     from '../../containers/page.jsx';
import PoliticalPartyPreference from './voter-choose-party/political-party-preference.jsx';

const values = {
  Yes : 'Yes',
  Skip: 'I do not wish to choose a political party'
};

const ChoosePartyPage = (props) => {

  return (
    <Page
      {...props}
      sectionKey={props.prereg}
    >
      <form onSubmit={props.onSubmit} className = 'choose-party-form'>
        
        <div className='choose-political-party'>

          <h2 className='question'>Would you like to choose a political party preference?</h2>
          <p>In order to vote for a presidential candidate in a primary election, you
          may need to be registered with that political party.</p>

          <RadioCollection  
            {...props}
            name          = 'isSelected'
            text          = {values}
            selectedValue = {props.politicalPartyChoose.isSelected}
            errorMessage  = {props.validations.isSelected()}
          >
            <RadioSelector 
              value='Yes'
            />
            <RadioSelector 
              value='Skip'
            />
          </RadioCollection>
        </div>

        <PoliticalPartyPreference
          {...props} 
          selectedValue = {props.politicalPartyChoose.politicalPartyChoose}
          errorMessage  = {props.validations.politicalPartyChoose()}
        />

        <NavigationButtons 
          {...props} 
          errorMessage = { props.validations.all() }
        />
      </form>
    </Page>
  )
};

export default ChoosePartyPage;
