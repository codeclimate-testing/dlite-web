'use strict';

import React from 'react';
import CheckboxSelector   from '../../checkbox-selector.jsx';
import CheckboxCollection from '../../checkbox-selector-collection.jsx';
import Translator         from '../../../i18n/translator-tag.jsx';

const Form = (props) => {

  if(props.cdlEndorsements.needEndorsement === 'Yes' && props.licenseClass === 'classA') {
    return (
      <div className='license-type-form'>
        <Translator
          tag             = 'h2'
          className       = 'question'
          translationPath = 'cdl.endorsmentsPage.whichSection.prompt'
        />
        <div className='row'>
          <fieldset role='group' aria-label='Endorsements'>
            <CheckboxCollection
              {...props}
              name  = 'type'
              array = {props.cdlEndorsements.type }
              onBlur = { props.onBlurValidate }
              errorMessage={ props.validations.endorsementType() }
            >
              <CheckboxSelector value = 'doubleTriple'className='endorsements-class' iconClass='double-triple'>
                <Translator tag = 'span' translationPath = 'cdl.endorsmentsPage.whichSection.values.T' />
              </CheckboxSelector>

              <CheckboxSelector value = 'tank' className='endorsements-class' iconClass='tank'>
                <Translator tag = 'span' translationPath = 'cdl.endorsmentsPage.whichSection.values.N' />
              </CheckboxSelector>

              <CheckboxSelector value = 'passengerVehicle' className='endorsements-class' iconClass='passenger-vehicle'>
                <Translator tag = 'span' translationPath = 'cdl.endorsmentsPage.whichSection.values.P' />
              </CheckboxSelector>

              <CheckboxSelector value = 'schoolBus' className='endorsements-class' iconClass='school-bus'>
                <Translator tag = 'span' translationPath = 'cdl.endorsmentsPage.whichSection.values.S' />
              </CheckboxSelector>

              <CheckboxSelector value = 'hazmat' className='endorsements-class' iconClass='hazmat'>
                <Translator tag = 'span' translationPath = 'cdl.endorsmentsPage.whichSection.values.H' />
              </CheckboxSelector>

              <CheckboxSelector value = 'tankHazmat' className='endorsements-class' iconClass='tank-hazmat'>
                <Translator tag = 'span' translationPath = 'cdl.endorsmentsPage.whichSection.values.X' />
              </CheckboxSelector>

              <CheckboxSelector value = 'firefighter' className='endorsements-class' iconClass='firefighter'>
                <Translator tag = 'span' translationPath = 'cdl.endorsmentsPage.whichSection.values.F' />
              </CheckboxSelector>

            </CheckboxCollection>
          </fieldset>
        </div>
      </div>
    )
  } else { return null; }
};

export default Form;
