'use strict';

import React from 'react';

import CheckboxSelector from '../../checkbox-selector.jsx';
import CheckboxCollection from '../../checkbox-selector-collection.jsx';
import translations       from '../../../i18n';
import { convertToHtml }  from '../../../i18n/convert-to-html.jsx';

const Form = (props) => {
  if (!props.showIf) { return null; }
  let locale = props.locale;
  return (
    <div className='row choose-new-cards'>
      {convertToHtml('p', translations[locale].intro.chooseSelectionPage.explanationMultiCard)}
      <div className='row'>
        <fieldset>
          <CheckboxCollection
            {...props}
            name          = 'new'
            array         = { props.cardType }
            onBlur        = { props.onBlurValidate }
            errorMessage  = { props.validations.cardType()}
          >
          <CheckboxSelector
            value     = 'ID'
            text={translations[locale].intro.chooseSelectionPage.values[0]}
          />
          <CheckboxSelector
            value     = 'DL'
            text={translations[locale].intro.chooseSelectionPage.values[1]}
          />
          </CheckboxCollection>
        </fieldset>
        <div className='unit spacer' />
      </div>
    </div>
  )
};

export default Form;
