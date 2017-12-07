'use strict';

import React from 'react';

import { updateCardType }     from "../../actions/index";
import Page                   from "../../presentations/page.jsx";
import Form                   from "../../presentations/apply/minor-id-only.jsx";
import connectForm            from '../../helpers/connect-form';
import navigateOnSubmit       from '../../helpers/navigate-on-submit';
import navigateOnBack         from '../../helpers/navigate-on-back';
import * as dataPresent       from '../../helpers/data-present';

const ConnectedForm = (props) => {
  let onSubmit          =   navigateOnSubmit('/real-id', props);
  let onBack            =   navigateOnBack('/what-do-you-want-to-do-today', props);
  let continueDisabled  =   props.cardType.ID === false;
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
    cardType:     state.application.cardType
  };
}

export default connectForm(mapStateToProps, updateCardType, ConnectedForm);
