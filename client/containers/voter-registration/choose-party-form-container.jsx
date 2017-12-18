'use strict';

import React from 'react';

import { updatePoliticalPartyChoose } from '../../actions/index';
import NavigationButtons from '../../presentations/navigation-buttons.jsx';
import PoliticalPartyChoose from '../../presentations/voter-registration/voter-choose-party-form.jsx';
import PoliticalPartyChoosePreReg from '../../presentations/voter-registration/voter-choose-party-prereg-form.jsx';
import PoliticalPartyPreference from '../../presentations/voter-registration/political-party-preference.jsx';
import connectForm from '../../helpers/connect-form';
import navigateOnSubmit from '../../helpers/navigate-on-submit';
import navigateOnBack from '../../helpers/navigate-on-back';
import * as dataPresent from '../../helpers/data-present';
import { isPreregistering } from '../../helpers/calculate-age';
import {
  pageTitle,
  sectionName
} from '../../helpers/registration-header-presenter';


const Presentation = (props) => {
  const formPageTitle = pageTitle(props.dateOfBirth);
  const formSectionName = sectionName(props.dateOfBirth);

  if (isPreregistering(props.dateOfBirth)) {
    return <PoliticalPartyChoosePreReg
      pageTitle={formPageTitle}
      sectionName={formSectionName}
      onChange={props.onChange}
      selectedValue={props.politicalPartyChoose.isSelected}
    />
  } else {
    return <PoliticalPartyChoose
      pageTitle={formPageTitle}
      sectionName={formSectionName}
      onChange={props.onChange}
      selectedValue={props.politicalPartyChoose.isSelected}
      />
  }
};

const ConnectedForm = (props) => {
  let continueDisabled = false;
  let showPoliticalPartyPreference = true;
  let onSubmit = navigateOnSubmit('/voting-registration/language', props);
  let onBack = navigateOnBack(props);

  if (props.politicalPartyChoose.isSelected === 'Yes') {
    showPoliticalPartyPreference = true;
    continueDisabled = !(dataPresent.politicalPartyChoose(props.politicalPartyChoose));

    return (
      <div>
        <form onSubmit={onSubmit}>
          <div>
            <Presentation {...props} />
          </div>
          <PoliticalPartyPreference
            onChange={props.onChange}
            selectedValue={props.politicalPartyChoose.politicalPartyChoose}
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
      <form onSubmit={onSubmit}>
        <div>
          <Presentation {...props} />
        </div>
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