'use strict';

import React                from 'react';
import RadioSelector        from '../../radio-selector.jsx';
import RadioCollection      from '../../radio-selector-collection.jsx';
import Translator           from '../../../i18n/translator-tag.jsx';

const Form = (props) => {

  return (
    <div className='row inner-button'>
      <fieldset role='group' aria-label='Correct or update choice'>
        <RadioCollection
          {...props}
          name          = {`${props.formName}correctOrUpdate`}
          errorMessage  = { props.validations.correctOrUpdate() }
        >
          <RadioSelector value= 'correct'>
            <Translator tag = 'span' translationPath = 'intro.correctOrUpdatePage.values.0' />
          </RadioSelector>
          <RadioSelector value='update'>
            <Translator tag = 'span' translationPath = 'intro.correctOrUpdatePage.values.1' />
          </RadioSelector>
        </RadioCollection>
      </fieldset>
    </div>
  )
};

export default Form;
