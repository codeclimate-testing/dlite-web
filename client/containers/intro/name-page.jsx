'use strict';

import React from 'react';

import { updateLegalName }  from "../../actions/index";
import Presentation         from "../../presentations/intro/name-page.jsx";
import connectForm          from '../../helpers/connect-form';
import navigateOnSubmit     from '../../helpers/navigate-on-submit';
import navigateOnBack       from '../../helpers/navigate-on-back';
import * as dataPresent     from '../../helpers/data-present';

const Page = (props) => {
  let continueDisabled  =   !dataPresent.legalName(props.legalName);
  let onSubmit          =   navigateOnSubmit('/my-basics/date-of-birth', props);
  let onBack            =   navigateOnBack(props);

  return (
    <Presentation
      {...props}
      onSubmit          = { onSubmit }
      onBack            = { onBack }
      continueDisabled  = { continueDisabled }
    />
  );
};

function mapStateToProps(state) {
  return {
    legalName: state.application.legalName,
    section: state.ui.section
  };
}

export default connectForm(mapStateToProps, updateLegalName, Page);
