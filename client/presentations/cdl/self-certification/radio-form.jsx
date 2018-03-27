'use strict';

import React              from 'react';
import RadioCollection    from '../../radio-selector-collection.jsx';
import RadioSelector      from '../../radio-selector.jsx';

const Form = (props) => {

  return (
    <div className = 'cdl-self-cert-intra-inter translation-missing'>

      <RadioCollection
        {...props}
        name          = 'certification'
        errorMessage  = { props.validations.select() }
      >
        <RadioSelector
          value   = 'inter'
          text    = {<h6>Interstate driving <br/>Non-Excepted</h6>}
        />
        <RadioSelector
          value   = 'intra'
          text    = {<h6>Intrastate driving <br/>Non-Excepted</h6>}
        />
      </RadioCollection>
    </div>
  );
};

export default Form;