'use strict';

import React from 'react';

import { updatePhysicalTraits }         from '../../actions/index';
import HomeLink                         from '../../presentations/home-link.jsx';
import NavigationButtons                from '../../presentations/navigation-buttons.jsx';
import EyeColor                         from '../../presentations/apply/eye-color.jsx';
import HairColor                        from '../../presentations/apply/hair-color.jsx';
import Sex                              from '../../presentations/apply/sex.jsx';
import connectForm                      from '../../helpers/connect-form';
import navigateOnSubmit                 from '../../helpers/navigate-on-submit';
import navigateOnBack                   from '../../helpers/navigate-on-back';
import * as dataPresent                 from '../../helpers/data-present';

const ConnectedForm = (props) => {
  let continueDisabled  = !(dataPresent.physicalTraits(props.physicalTraits))
  let onSubmit          = navigateOnSubmit('/my-basics/traits-height-weight', props);
  let onBack            = navigateOnSubmit('/my-basics/address', props);

  return (
    <div className="physical-traits-form">
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
          onBack        = {onBack}
        />
        <NavigationButtons
          continueDisabled={continueDisabled}
          onBack={onBack}
        />
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
