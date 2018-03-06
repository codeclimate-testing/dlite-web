'use strict';

import React from 'react';
import CheckboxSelector   from '../../checkbox-selector.jsx';
import CheckboxCollection from '../../checkbox-selector-collection.jsx';
import translations       from '../../../i18n';
import { convertToHtml }  from '../../../i18n/convert-to-html.jsx';

const Form = (props) => {
  if(props.cdlEndorsements.needEndorsement === 'Yes' && props.licenseClass !== 'classA') {
    return (
      <div className='license-type-form'>
        <h2 className='question translation-missing'>Which?</h2>
        <div className='row'>
          <fieldset>
            <CheckboxCollection
              {...props}
              name  = 'type'
              array = {props.cdlEndorsements.type }
              onBlur = { props.onBlurValidate }
              errorMessage={ props.validations.endorsementType() }
            >
              <CheckboxSelector
                value = 'tank'
                text  = 'Tank vehicles'
                className='endorsements-class'
                iconClass='tank'
              />
              <CheckboxSelector
                value = 'passengerVehicle'
                text  = 'Passenger vehicles'
                className='endorsements-class'
                iconClass='passenger-vehicle'
              />
              <CheckboxSelector
                value = 'schoolBus'
                text  = 'School bus'
                className='endorsements-class'
                iconClass='school-bus'
              />
              <CheckboxSelector
                value = 'hazmat'
                text  = 'Marked vehicles transporting hazardous materials or wastes'
                className='endorsements-class'
                iconClass='hazmat'
              />
              <CheckboxSelector
                value = 'tankHazmat'
                text  = 'Tank vehicles transporting hazardous materials or wastes'
                className='endorsements-class'
                iconClass='tank-hazmat'
              />
              <CheckboxSelector
                value = 'firefighter'
                text  = 'Firefighter Endorsement'
                className='endorsements-class'
                iconClass='firefighter'
              />
            </CheckboxCollection>
          </fieldset>
        </div>
      </div>
      )
  } else { return null; }
};

export default Form;
