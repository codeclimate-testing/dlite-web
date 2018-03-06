'use strict';

import React from 'react';
import CheckboxSelector   from '../../checkbox-selector.jsx';
import CheckboxCollection from '../../checkbox-selector-collection.jsx';
import translations       from '../../../i18n';
import { convertToHtml }  from '../../../i18n/convert-to-html.jsx';

const Form = (props) => {
  let locale = props.locale
  if(props.cdlEndorsements.needEndorsement === 'Yes' && props.licenseClass !== 'classA') {
    return (
      <div className='license-type-form'>
          {convertToHtml('h2', translations[locale].cdl.endorsmentsPage.whichSection.prompt, 'question')}
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
                text  = {translations[locale].cdl.endorsmentsPage.whichSection.values.N}
                className='endorsements-class'
                iconClass='tank'
              />
              <CheckboxSelector
                value = 'passengerVehicle'
                text  = {translations[locale].cdl.endorsmentsPage.whichSection.values.P}
                className='endorsements-class'
                iconClass='passenger-vehicle'
              />
              <CheckboxSelector
                value = 'schoolBus'
                text  = {translations[locale].cdl.endorsmentsPage.whichSection.values.S}
                className='endorsements-class'
                iconClass='school-bus'
              />
              <CheckboxSelector
                value = 'hazmat'
                text  = {translations[locale].cdl.endorsmentsPage.whichSection.values.H}
                className='endorsements-class'
                iconClass='hazmat'
              />
              <CheckboxSelector
                value = 'tankHazmat'
                text  = {translations[locale].cdl.endorsmentsPage.whichSection.values.X}
                className='endorsements-class'
                iconClass='tank-hazmat'
              />
              <CheckboxSelector
                value = 'firefighter'
                text  = {translations[locale].cdl.endorsmentsPage.whichSection.values.F}
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
