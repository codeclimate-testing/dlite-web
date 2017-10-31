'use strict';

import React from 'react';

import { updatePoliticalPartyChoose }   from '../../actions/index';
import HomeLink                         from '../../presentations/home-link.jsx';
import ContinueButton                   from '../../presentations/continue-button.jsx';
import PoliticalPartyChoose             from '../../presentations/voter/voter-choose-party-form.jsx';
import PoliticalPartyPreference         from '../../presentations/voter/political-party-preference.jsx';
import connectForm                      from '../../helpers/connect-form';
import navigateOnSubmit                 from '../../helpers/navigate-on-submit';
import * as dataPresent                 from '../../helpers/data-present';

const ConnectedForm = (props) => {
  let continueDisabled                  = false;
  let showPoliticalPartyPreference      = true;
  let onSubmit                          = navigateOnSubmit('/about-me/voter/ballot-language', props);
  
  if(props.politicalPartyChoose.isSelected === 'Yes') {
    showPoliticalPartyPreference  = true;
    continueDisabled = !(dataPresent.politicalPartyChoose(props.politicalPartyChoose));

    return (
      <div>
        <HomeLink />

        <form onSubmit={onSubmit}>
         <PoliticalPartyChoose
            onChange              = {props.onChange}
            selectedValue         = {props.politicalPartyChoose.isSelected}
          />
          <PoliticalPartyPreference
            onChange                  = {props.onChange}
            selectedValue             = {props.politicalPartyChoose.politicalPartyChoose}
          />
          <ContinueButton disabled={continueDisabled} />
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
        <ContinueButton disabled={continueDisabled} />
      </form>
    </div>
  );
};


function mapStateToProps(state) {
  return {
    politicalPartyChoose: state.application.politicalPartyChoose
  };
}

export default connectForm(mapStateToProps, updatePoliticalPartyChoose, ConnectedForm);