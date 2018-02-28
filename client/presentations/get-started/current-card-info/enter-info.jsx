'use strict';

import React              from 'react';
import TextInput          from '../../text-input.jsx';
import ExpirationDate     from '../../expiration-date.jsx';

const Form = (props) => {
  if (!props.showIf) { return null; }
  return (
    <div className = 'enter-current-card-info'>
      {props.children}

      <fieldset>
        <TextInput
          {...props}
          identifier    = 'number'
          description   = { props.textDescription }
          value         = { props.currentCardInfo.number }
          errorMessage  = { props.validations.number() }
        />

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