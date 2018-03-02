'use strict';

import React                from 'react';
import RadioSelector        from '../../radio-selector.jsx';
import RadioCollection      from '../../radio-selector-collection.jsx';
import translations         from '../../../i18n';

const Form = (props) => {
  let locale = props.locale;

  return (
    <div className='row inner-button'>
      <fieldset>
        <RadioCollection
          {...props}
          name          = {`${props.formName}correctOrUpdate`}
          errorMessage  = { props.validations.correctOrUpdate() }
        >
          <RadioSelector
            value= 'correct'
            text={translations[locale].intro.correctOrUpdatePage.values[0]}
          />
          <RadioSelector
            value='update'
            text={translations[locale].intro.correctOrUpdatePage.values[1]}
          />
        </RadioCollection>
      </fieldset>
    </div>
  )
};

export default Form;
