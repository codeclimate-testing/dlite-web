'use strict';

import React                from 'react';
import RadioSelector        from '../../radio-selector.jsx';
import RadioCollection      from '../../radio-selector-collection.jsx';
import Translator           from '../../../i18n/translator-tag.jsx';
import {
  getCorrectString
} from '../../../helpers/data/card-type';

const Form = (props) => {
  let formName = getCorrectString(props, 'DL', 'ID');

  return (
    <div className='row inner-buttom'>
      <fieldset role='group' aria-label='Replacement reason'>
        <RadioCollection
          {...props}
          name= {`${formName}-reason`}
          onBlur  = { props.onBlurValidate }
          errorMessage = {props.validations.reason() }
        >
          <RadioSelector value='lostOrStolen'>
          <Translator tag = 'span' translationPath = 'intro.replacementReasonPage.values.0' />
          </RadioSelector>
          <RadioSelector value='damaged'>
            <Translator tag = 'span' translationPath = 'intro.replacementReasonPage.values.1' />
          </RadioSelector>
          <RadioSelector value='other'>
            <Translator tag = 'span' translationPath = 'intro.replacementReasonPage.values.2' />
          </RadioSelector>
        </RadioCollection>
      </fieldset>
    </div>
  )
};

export default Form;
