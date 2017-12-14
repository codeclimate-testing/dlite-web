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
import { isPreregistering }             from '../../helpers/calculate-age';

const PreRegisteringForm = (props) => {
  return (
    <PoliticalPartyChoosePreReg
      key="Political Party choose Pre-registration"
      onChange              = {props.onChange}
      selectedValue         = {props.politicalPartyChoose.isSelected}
    />
  );
};

const ConnectedForm = (props) => {
  let continueDisabled                  = false;
  let showPoliticalPartyPreference      = true;
  let onSubmit                          = navigateOnSubmit('/voting-registration/language', props);
  let onBack                            = navigateOnBack(props);

  let content = [];

  if(props.politicalPartyChoose.isSelected === 'Yes'){
    showPoliticalPartyPreference  = true;
    continueDisabled = !(dataPresent.politicalPartyChoose(props.politicalPartyChoose));

    if (isPreregistering(props.dateOfBirth)) {
      content.push(
      <PoliticalPartyChoosePreReg
        key="Political Party choose Pre-registration"
        onChange              = {props.onChange}
        selectedValue         = {props.politicalPartyChoose.isSelected}

      />
      );
    } else {
      content.push(
      <PoliticalPartyChoose
        key="Political Party choose"
        onChange              = {props.onChange}
        selectedValue         = {props.politicalPartyChoose.isSelected}
      />
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

  if (isPreregistering(props.dateOfBirth)) {
    content.push(
    <PoliticalPartyChoosePreReg
      key="Political Party Choose Pre-registration"
      onChange              = {props.onChange}
      selectedValue         = {props.politicalPartyChoose.isSelected}
    />
    );
  } else {
    content.push(
    <PoliticalPartyChoose
      key="Political Party choose"
      onChange              = {props.onChange}
      selectedValue         = {props.politicalPartyChoose.isSelected}
    />
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
    dateOfBirth:  state.application.dateOfBirth
  };
}

export default connectForm(mapStateToProps, updatePoliticalPartyChoose, ConnectedForm);
