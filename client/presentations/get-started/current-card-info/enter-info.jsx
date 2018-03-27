'use strict';

import React              from 'react';
import TextInput          from '../../text-input.jsx';
import ExpirationDate     from '../../expiration-date.jsx';
import Translator         from '../../../i18n/translator-tag.jsx';

const Form = (props) => {
  if (!props.showIf) { return null; }
  return (
    <div className = 'enter-current-card-info'>
      {props.children}

      <fieldset role='group' aria-label='Card information'>
        <TextInput
          {...props}
          identifier    = 'number'
          value         = { props.currentCardInfo.number }
          errorMessage  = { props.validations.number() }
        >
          <Translator tag = 'span' translationPath = { props.textDescription } />
        </TextInput>

        <ExpirationDate
          {...props}
          values      = { props.currentCardInfo }
          validations = { props.validations }
        />
      </fieldset>
    </div>
  );
};

export default Form;
