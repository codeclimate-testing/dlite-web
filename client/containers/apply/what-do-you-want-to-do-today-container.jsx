'use strict';

import React from 'react';

import { updateCardType }                 from "../../actions/index";
import { ageChecks }                      from '../../helpers/calculate-age';
import Page                               from "../../presentations/page.jsx";
import Form                               from "../../presentations/apply/choose-card-form.jsx";
import connectForm                        from '../../helpers/connect-form';
import navigateOnSubmit                   from '../../helpers/navigate-on-submit';
import navigateOnBack                     from '../../helpers/navigate-on-back';
import * as dataPresent                   from '../../helpers/data-present';

const ConnectedForm = (props) => {
  let address = '/real-id';

  if(ageChecks.Under15Half(props.dateOfBirth) && props.cardType.DL) {
    address             =   '/youth-license-notification';
  }
  
  let onSubmit          =   navigateOnSubmit(address, props);
  let onBack            =   navigateOnBack('/my-basics/date-of-birth', props);
  let continueDisabled  =   !(dataPresent.cardType(props.cardType));
  let pageTitle         =   'DMV: License application';

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
    cardType:     state.application.cardType,
    dateOfBirth:  state.application.dateOfBirth
  };
}

export default connectForm(mapStateToProps, updateCardType, ConnectedForm);
