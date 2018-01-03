'use strict';

import React                           from 'react';
import { connect }                     from 'react-redux';

import handlers                        from '../../helpers/handlers';
import * as dataPresent                from '../../helpers/data-present';
import { updatePoliticalPartyChoose }  from '../../actions/index';
import PoliticalPartyChoosePage        from '../../presentations/voter-registration/voter-choose-party/voter-choose-party-page.jsx';
import PreRegPoliticalPartyChoosePage  from '../../presentations/voter-registration/voter-choose-party/voter-choose-party-prereg-page.jsx';
import { isPreregistering }            from '../../helpers/calculate-age';
import {
  pageTitle,
  sectionName
} from '../../helpers/registration-header-presenter';


const Page = (props) => {
  const formPageTitle     = pageTitle(props.dateOfBirth);
  const formSectionName   = sectionName(props.dateOfBirth);
  let continueDisabled    = false;
  let onSubmit            = handlers.navigateOnSubmit('/voting-registration/language', props);
  let onBack              = handlers.navigateOnBack(props);

  if (isPreregistering(props.dateOfBirth)) {
    return <PreRegPoliticalPartyChoosePage
      {...props}
      pageTitle={formPageTitle}
      sectionName={formSectionName}
      onSubmit          = { onSubmit }
      onBack            = { onBack }
      continueDisabled  = { continueDisabled }
    />
  } else {
    return <PoliticalPartyChoosePage
      {...props}
      pageTitle={formPageTitle}
      sectionName={formSectionName}
      onSubmit          = { onSubmit }
      onBack            = { onBack }
      continueDisabled  = { continueDisabled }
      />
  }
};

function mapStateToProps(state) {
  return {
    politicalPartyChoose: state.application.politicalPartyChoose,
    optOut: state.application.optOut,
    dateOfBirth:  state.application.dateOfBirth,
    focused:  state.ui.focus
  };
}

function mapDispatchToProps(dispatch) {
  const onChange = handlers.onInputChange(updatePoliticalPartyChoose, dispatch);
  const onSubmit = handlers.onFormSubmit;
  const onBlur   = handlers.onBlur(dispatch);
  const onFocus  = handlers.onFocus(dispatch);

  return {
    onSubmit,
    onChange,
    onBlur,
    onFocus
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);
