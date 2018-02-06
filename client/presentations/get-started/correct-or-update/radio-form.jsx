'use strict';

import React                from 'react';
import RadioSelector        from '../../radio-selector.jsx';
import RadioCollection      from '../../radio-selector-collection.jsx';
import translations         from '../../../i18n';

const Form = (props) => {
  return (
    <div className='row inner-buttom'>
      <fieldset>
        <RadioCollection
          {...props}
          name          = 'correctOrUpdate'
          errorMessage  = { props.validations.correctOrUpdate() }
        >
          <RadioSelector
            value= 'correct'
            text={translations.intro.correctOrUpdatePage.values[0]}
          />
          <RadioSelector
            value='update'
            text={translations.intro.correctOrUpdatePage.values[1]}
          />
        </RadioCollection>
      </fieldset>
    </div>
  )
};

export default Form;
