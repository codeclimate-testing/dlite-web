'use strict';

import React              from 'react';
import CheckboxSelector   from '../../checkbox-selector.jsx';
import CheckboxCollection from '../../checkbox-selector-collection.jsx';
import translations       from '../../../i18n';
import { convertToHtml }  from '../../../i18n/convert-to-html.jsx';

const Form = (props) => {
  if (!props.showIf) { return null; }

  return (
    <div className='endorsement-form'>
      <hr/>
      <h2 className='question translation-missing'>Which?</h2>
      {convertToHtml('p', translations.intro.licenseTypePage.explanation)}
      <div className='row'>
        <fieldset>
          <CheckboxCollection
            {...props}
            name  = 'endorsement'
            array = {props.licenseType.endorsement }
            onBlur = { props.onBlurValidate }
            errorMessage={ props.validations.endorsement() }
          >
            <CheckboxSelector
              value = 'firefighter'
              text = 'Firefighter'
            />
            <CheckboxSelector
              value = 'ambulance'
              text = 'Ambulance'
            />
          </CheckboxCollection>
        </fieldset>
      </div>
    </div>
  );
};

export default Form;
