'use strict';

import React from 'react';

import { updateCardType }     from "../../actions/index";
import Page                   from "../../presentations/page.jsx";
import Form                   from "../../presentations/apply/choose-card-form.jsx";
import connectForm            from '../../helpers/connect-form';
import navigateOnSubmit       from '../../helpers/navigate-on-submit';
import navigateOnBack         from '../../helpers/navigate-on-back';
import * as dataPresent       from '../../helpers/data-present';

const ConnectedForm = (props) => {
  // if under 14 and selected "driverLicense", then instead of going to real-id page, go to page with message that user is too young and can only apply for ID
  let onSubmit          =   props.age > 0 && props.age < 14 && props.cardType.DL === true ? navigateOnSubmit('/minor-DL-message', props) : navigateOnSubmit('/real-id', props);
  let onBack            =   navigateOnBack('/my-basics/date-of-birth', props);
  let continueDisabled  =   !(dataPresent.cardType(props.cardType));
  let pageTitle         =   'DMV: License application'

  return (
    <Page
      pageTitle={pageTitle}
      sectionNumber='1'
      sectionName='My basics'
      {...props}
    >
      <Form
        pageTitle         = { pageTitle }
        onSubmit          = { onSubmit }
        onBack            = { onBack }
        onChange          = { props.onChange }
        cardType          = { props.cardType }
        continueDisabled  = { continueDisabled }
      />
    </Page>
  );
};

function mapStateToProps(state) {
  return {
    cardType:       state.application.cardType,
    age:            state.application.dateOfBirth.age
  };
}

export default connectForm(mapStateToProps, updateCardType, ConnectedForm);
