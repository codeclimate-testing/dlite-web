'use strict';

import React from 'react';

import { updatePhysicalTraits }                 from '../../actions/index';
import HomeLink                         from '../../presentations/home-link.jsx';
import ContinueButton                   from '../../presentations/continue-button.jsx';
import EyeColor                         from '../../presentations/apply/eye-color.jsx';
import HairColor                        from '../../presentations/apply/hair-color.jsx';
import Sex                              from '../../presentations/apply/sex.jsx';
import connectForm                      from '../../helpers/connect-form';
import navigateOnSubmit                 from '../../helpers/navigate-on-submit';
import * as dataPresent                 from '../../helpers/data-present';

const ConnectedForm = (props) => {
  let continueDisabled  = !(dataPresent.physicalTraits(props.physicalTraits))
  let onSubmit          = navigateOnSubmit('/about-me/traits-height-weight', props);

  return (
    <div className="physical-traits-form">
      <HomeLink />

      <form onSubmit={onSubmit}>
       <Sex
          onChange      = {props.onChange}
          selectedValue = {props.physicalTraits.sex}
        />
        <br></br>
        <EyeColor
          onChange      = {props.onChange}
          selectedValue = {props.physicalTraits.eyeColor}
        />
        <br></br>
        <HairColor
          onChange      = {props.onChange}
          selectedValue = {props.physicalTraits.hairColor}
        />
        <ContinueButton disabled={continueDisabled} />
      </form>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    physicalTraits: state.application.physicalTraits
  };
}

export default connectForm(mapStateToProps, updatePhysicalTraits, ConnectedForm);
