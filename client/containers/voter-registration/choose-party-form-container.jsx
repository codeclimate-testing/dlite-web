'use strict';

import React                           from 'react';
import { connect }                     from 'react-redux';

import handlers                        from '../../helpers/handlers';
import { updatePoliticalPartyChoose }  from '../../actions/index';
import PoliticalPartyChoosePage        from '../../presentations/voter-registration/voter-choose-party/voter-choose-party-page.jsx';
import PreRegPoliticalPartyChoosePage  from '../../presentations/voter-registration/voter-choose-party/voter-choose-party-prereg-page.jsx';
import { isPreregistering }            from '../../helpers/calculate-age';

const Page = (props) => {
  let continueDisabled    = false;
  let onSubmit            = handlers.navigateOnSubmit('/voting-registration/language', props);
  let onBack              = handlers.navigateOnBack(props);

  if (isPreregistering(props.dateOfBirth)) {
    return <PreRegPoliticalPartyChoosePage
      {...props}
      onSubmit          = { onSubmit }
      onBack            = { onBack }
      continueDisabled  = { continueDisabled }
    />
  } else {
    return <PoliticalPartyChoosePage
      {...props}
      onSubmit          = { onSubmit }
      onBack            = { onBack }
      continueDisabled  = { continueDisabled }
      />
  }
};

const mapStateToProps = (state) => {
  return {
    politicalPartyChoose: state.application.politicalPartyChoose,
    optOut: state.application.optOut,
    dateOfBirth:  state.application.dateOfBirth,
    focused:  state.ui.focus
  };
};

const mapDispatchToProps = (dispatch) => {
  const onChange = handlers.onInputChange(updatePoliticalPartyChoose, dispatch);
  const onSubmit = handlers.onFormSubmit(dispatch);
  const onBlur   = handlers.onBlur(dispatch);
  const onFocus  = handlers.onFocus(dispatch);

  return {
    onChange,
    onSubmit,
    onBlur,
    onFocus
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);
