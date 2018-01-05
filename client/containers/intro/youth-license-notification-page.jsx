'use strict';

import React                from 'react';
import connectForm          from '../../helpers/connect-form';

import handlers             from '../../helpers/handlers';
import * as dataPresent     from '../../helpers/data-present';

import Presentation         from '../../presentations/intro/youth-license-notification-page.jsx';
import { updateCardType }   from '../../actions/index';
import { getDL }            from '../../helpers/data/card-type';
import { ageChecks }        from '../../helpers/calculate-age';

const Page = (props) => {
  const continueDisabled  = ageChecks.Under15(props.dateOfBirth) ? props.cardType.youthIDInstead !== 'Yes' : false;
  const onSubmit          = handlers.navigateOnSubmit('/real-id', props);
  const onBack            = handlers.navigateOnBack(props);

  const selectedValue     = props.cardType.youthIDInstead === 'Yes' && getDL(props) ? 'No' : props.cardType.youthIDInstead;

  return (
    <Presentation
      {...props}
      onSubmit={onSubmit}
      onBack={onBack}
      selectedValue={selectedValue}
      continueDisabled={continueDisabled}
    />
  )
};

function mapStateToProps(state) {
  return {
    cardType:     state.application.cardType,
    dateOfBirth:  state.application.dateOfBirth,
    focused:      state.ui.focus 
  };
};

export default connectForm(mapStateToProps, updateCardType, Page);