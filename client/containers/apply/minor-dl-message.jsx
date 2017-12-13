'use strict';

import React from 'react';
import { connect } from "react-redux";

import {
  updateCardType,
  blurPageElement,
  focusPageElement
} from '../../actions/index';

import onInputChange                  from '../../helpers/on-input-change';
import onFormSubmit                   from '../../helpers/on-form-submit';
import navigateOnSubmit               from '../../helpers/navigate-on-submit';
import navigateOnBack                 from '../../helpers/navigate-on-back';
import * as dataPresent               from '../../helpers/data-present';

import Presentation                   from '../../presentations/apply/minor-id-only.jsx';

const Form = (props) => {
  const continueDisabled = props.cardType.ID === false;
  const onSubmit = navigateOnSubmit('/real-id', props);
  const onBack   = navigateOnBack('/what-do-you-want-to-do-today', props);

  return (
    <Presentation
      {...props}
      onSubmit={onSubmit}
      onBack={onBack}
      selectedValue={props.cardType.ID && !props.cardType.DL ? 'Yes' : 'No'}
      continueDisabled={continueDisabled}
    >
      {
        props.cardType.DL === false && props.cardType.ID === false &&
        <div>
          <h4>OK, please come back when you turn 14.</h4>
        </div>
      }
    </Presentation>
  )
};

function mapStateToProps(state) {
  return {
    cardType: state.application.cardType,
    //focused: state.ui.focus
  };
}

function mapDispatchToProps(dispatch) {
  const onBlur = () => {
    dispatch(blurPageElement());
  };

  const onFocus = (event) => {
    let value = (event.target && event.target.value) || '';
    dispatch(focusPageElement(value));
  };

  const toggleID = e => {
    e.target.value = (e.target.value === 'Yes');
    return onChange(e);
  };

  const toggleDL = e => {
    e.target.name = 'DL'
    e.target.value = !e.target.value;
    return onChange(e);
  };

  const onChange = onInputChange(updateCardType, dispatch);
  const onSubmit = onFormSubmit;
  const toggleCardTypes = (e) => {
    // call onChange twice
    toggleID(e);
    toggleDL(e);
  }

  return {
    onSubmit,
    toggleCardTypes,
    onBlur,
    onFocus
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);
