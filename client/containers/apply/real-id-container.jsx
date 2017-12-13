'use strict';

import React from 'react';
import { connect } from "react-redux";

import {
  updateRealID,
  toggleFAQDrawer
 }       from "../../actions/index";

import RealIdForm             from "../../presentations/apply/real-id-form.jsx";
import RealIdDesignationForm  from "../../presentations/apply/real-id-designation-form.jsx";
import NavigationButtons      from '../../presentations/navigation-buttons.jsx';
import onInputChange          from '../../helpers/on-input-change';
import onFormSubmit           from '../../helpers/on-form-submit';
import navigateOnSubmit       from '../../helpers/navigate-on-submit';
import navigateOnBack         from '../../helpers/navigate-on-back';
import * as dataPresent       from '../../helpers/data-present';
import FAQDrawer              from '../../presentations/faq-drawer-ctrl.jsx';

const ConnectedForm = (props) => {
  let address           =   props.cardType.ID ? '/reduced-fee' : '/get-started';
  let onSubmit          =   navigateOnSubmit(address, props);
  let onBack            =   navigateOnBack('/what-do-you-want-to-do-today', props);
  let continueDisabled  =   !(dataPresent.realID(props.realID));

  let content = [];

  content.push(
    <RealIdForm
      onChange = { props.onChange }
      selectedValue = { props.realID.getRealID }
      cardType = { props.cardType }
      key = 'real-id-one-card-form'
    />
  )

  if(props.realID.getRealID === 'Yes' && props.cardType.ID && props.cardType.DL) {
    continueDisabled = !(props.realID.realIdDesignation);
    content.push(
      <RealIdDesignationForm
        onChange = { props.onChange }
        selectedValue = {props.realID.realIdDesignation}
        key = 'real-id-designation'
      />
    )
  };

  content.push(
    <FAQDrawer
      {...props}
      key = 'fcc-about-info'
      title='What is a federally compliant card?'
      drawerName='FCCInfo'>
      <div className='faq-fcc-info-body'>
        <p>To meet the REAL ID Act, the California DMV will offer two kinds of cards: a federally compliant card and a non-compliant card. Both a compliant and a non-compliant driver license allow you to legally drive and prove your identity.</p>
        <p><b>You need a federally compliant card in order to </b>fly within the U.S or enter a federal building, national laboratory, or military base starting October 1, 2020.</p>
        <p>Otherwise, you will need a passport or other acceptable document.</p>
      </div>
    </FAQDrawer>
  )

  content.push(
    <FAQDrawer
      {...props}
      key = 'fcc-documents-requirement'
      title='What’s required to get a federally compliant card?'
      drawerName='FCCRequirements'>
      <div className='faq-fcc-docs-requirement-body'>
        You will need <b>1</b> of following:
        <ul className='bullet-list'>
          <li>valid U.S. passport,</li>
          <li>birth certificate from the U.S. or its territories,</li>
          <li>valid foreign passport with I-94 or I-551,</li>
          <li>valid employment authorization card,</li>
          <li>certificate of naturalization or citizenship, or a</li>
          <li>resident alien card (green card)</li>
        </ul>
        <p>You also need one document that proves where you live.</p>
      </div>
    </FAQDrawer>
  )

  content.push(
    <NavigationButtons
      continueDisabled  = { continueDisabled }
      onBack            = { onBack }
      key               ='navigation-buttons'
    />
  );

  return (
    <form onSubmit={onSubmit}>
      { content }
    </form>
  )
};

function mapStateToProps(state) {
  return {
    realID :    state.application.realID,
    cardType:   state.application.cardType,
    faqDrawers: state.ui.faqDrawers
  };
}

function mapDispatchToProps(dispatch) {
  const onToggleFAQ = (event) => {
    dispatch(toggleFAQDrawer(event.target.id));
  };

  const onChange = onInputChange(updateRealID, dispatch);
  const onSubmit = onFormSubmit;

  return {
    onToggleFAQ,
    onSubmit,
    onChange
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedForm);
