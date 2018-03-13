'use strict';

import React                  from 'react';
import connectForm            from '../../../helpers/connect-form';
import Presentation           from '../../../presentations/voter-registration/voter-preferences-updated-page.jsx';
import handlers               from '../../../helpers/handlers';

const Page = (props) => {
  let onSubmit          = handlers.navigateOnSubmit('/voting-registration/choose-party', props);
  let onBack            = handlers.navigateOnBack(props);

  return (
    <Presentation
      {...props}
      onSubmit  = {onSubmit}
      onBack    = {onBack}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    dateOfBirth   : state.cdl.basics.dateOfBirth,
    optOut        : state.cdl.voting.optOut,
    focused       : state.ui.focus,
    locale        : state.ui.locale
  };
};

export default connectForm(mapStateToProps, null, Page);
