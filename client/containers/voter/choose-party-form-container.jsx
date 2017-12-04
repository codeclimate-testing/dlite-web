'use strict';

import React from 'react';

import { updatePoliticalPartyChoose }   from '../../actions/index';
import HomeLink                         from '../../presentations/home-link.jsx';
import NavigationButtons                from '../../presentations/navigation-buttons.jsx';
import PoliticalPartyChoose             from '../../presentations/voter/voter-choose-party-form.jsx';
import PoliticalPartyPreference         from '../../presentations/voter/political-party-preference.jsx';
import connectForm                      from '../../helpers/connect-form';
import navigateOnSubmit                 from '../../helpers/navigate-on-submit';
import navigateOnBack                   from '../../helpers/navigate-on-back';
import * as dataPresent                 from '../../helpers/data-present';

const ConnectedForm = (props) => {
  let continueDisabled                  = false;
  let showPoliticalPartyPreference      = true;
  let onSubmit                          = navigateOnSubmit('/voting-registration/language', props);
  let onBack;

  if(props.optOut == "I am already registered to vote in California"){
     onBack = navigateOnBack('/voting-registration/updating-preferences', props);
  } else {
     onBack = navigateOnBack('/voting-registration/preferences', props);
  };

  if(props.politicalPartyChoose.isSelected === 'Yes') {
    showPoliticalPartyPreference  = true;
    continueDisabled = !(dataPresent.politicalPartyChoose(props.politicalPartyChoose));

    return (
      <div>
        <form onSubmit={onSubmit}>
         <PoliticalPartyChoose
            onChange              = {props.onChange}
            selectedValue         = {props.politicalPartyChoose.isSelected}
          />
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

  return (
    <div>
      <HomeLink />

      <form onSubmit={onSubmit}>
        <PoliticalPartyChoose
          onChange      = {props.onChange}
          selectedValue = {props.politicalPartyChoose.isSelected}
        />
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
    optOut: state.application.optOut
  };
}

export default connectForm(mapStateToProps, updatePoliticalPartyChoose, ConnectedForm);
