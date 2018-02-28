'use strict';

import React                from 'react';
import RadioSelector        from '../../radio-selector.jsx';
import RadioCollection      from '../../radio-selector-collection.jsx';
import translations         from '../../../i18n';
import {
  getCorrectString
} from '../../../helpers/data/card-type';

const Form = (props) => {
  let formName = getCorrectString(props, 'DL', 'ID');
  let locale = props.locale;
  return (
    <div className='row inner-buttom'>
      <fieldset>
        <RadioCollection
          {...props}
          name= {`${formName}-reason`}
          onBlur  = { props.onBlurValidate }
          errorMessage = {props.validations.reason() }
        >
          <RadioSelector
            value='lostOrStolen'
            text={translations[locale].intro.replacementReasonPage.values[0]}
          />
          <RadioSelector
            value='damaged'
            text={translations[locale].intro.replacementReasonPage.values[1]}
          />
          <RadioSelector
            value='other'
            text={translations[locale].intro.replacementReasonPage.values[2]}
          />
        </RadioCollection>
      </fieldset>
    </div>
  )
};

export default Form;
