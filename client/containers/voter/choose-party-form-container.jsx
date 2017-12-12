'use strict';

import React from 'react';

import { updatePoliticalPartyChoose }   from '../../actions/index';
import HomeLink                         from '../../presentations/home-link.jsx';
import NavigationButtons                from '../../presentations/navigation-buttons.jsx';
import PoliticalPartyChoose             from '../../presentations/voter/voter-choose-party-form.jsx';
import PoliticalPartyChoosePreReg       from '../../presentations/voter/voter-choose-party-prereg-form.jsx';
import PoliticalPartyPreference         from '../../presentations/voter/political-party-preference.jsx';
import connectForm                      from '../../helpers/connect-form';
import navigateOnSubmit                 from '../../helpers/navigate-on-submit';
import navigateOnBack                   from '../../helpers/navigate-on-back';
import * as dataPresent                 from '../../helpers/data-present';
import { getCurrentAge }                from '../../helpers/calculate-age';

const ConnectedForm = (props) => {
  let continueDisabled                  = false;
  let showPoliticalPartyPreference      = true;
  let onSubmit                          = navigateOnSubmit('/voting-registration/language', props);
  let onBack                            = navigateOnBack('/voting-registration/preferences', props);

  let content = [];

  if(props.politicalPartyChoose.isSelected === 'Yes'){
    showPoliticalPartyPreference  = true;
    continueDisabled = !(dataPresent.politicalPartyChoose(props.politicalPartyChoose));

  if ((props.dateOfBirth.age >= 16 ) && (props.dateOfBirth.age <= 18)) {
    content.push(
    <PoliticalPartyChoosePreReg 
      key="Political Party choose Pre-registration" 
      onChange              = {props.onChange}
      selectedValue         = {props.politicalPartyChoose.isSelected}
      age                   = {props.dateOfBirth.age}
      />
    );
  }
  else {
    content.push(
    <PoliticalPartyChoose 
      key="Political Party choose" 
      onChange              = {props.onChange}
      selectedValue         = {props.politicalPartyChoose.isSelected}
      age                   = {props.dateOfBirth.age}/>
    );
  }

    return (
      <div>
        <form onSubmit={onSubmit}>
          <div>{content}</div>
          <PoliticalPartyPreference
            onChange                  = {props.onChange}
            selectedValue             = {props.politicalPartyChoose.politicalPartyChoose}
          />
        <NavigationButtons
          continueDisabled={continueDisabled}
          onBack={onBack}
        />
        </form>
      </div>
    );
  }

  if ((props.dateOfBirth.age >= 16 ) && (props.dateOfBirth.age <= 18)) {
    content.push(
    <PoliticalPartyChoosePreReg 
      key="Political Party Choose Pre-registration" 
      onChange              = {props.onChange}
      selectedValue         = {props.politicalPartyChoose.isSelected}
      age                   = {props.dateOfBirth.age}/>
    );
  }
  else {
    content.push(
    <PoliticalPartyChoose 
      key="Political Party choose" 
      onChange              = {props.onChange}
      selectedValue         = {props.politicalPartyChoose.isSelected}
      age                   = {props.dateOfBirth.age}/>
    );
  }
  return (
    <div>

      <form onSubmit={onSubmit}>
       <div>{content}</div>
        <NavigationButtons
          continueDisabled={continueDisabled}
          onBack={onBack}
        />
      </form>
    </div>
  );
};


function mapStateToProps(state) {
  return {
    politicalPartyChoose: state.application.politicalPartyChoose,
    optOut: state.application.optOut,
    dateOfBirth: state.application.dateOfBirth
  };
}

export default connectForm(mapStateToProps, updatePoliticalPartyChoose, ConnectedForm);
