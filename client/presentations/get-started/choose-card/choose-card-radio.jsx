'use strict';

import React                from 'react';

import RadioCollection      from '../../radio-selector-collection.jsx';
import { IDorDL }           from '../../../helpers/data/card-type'
import radioIdDlGroup       from '../../radio-id-dl-group.jsx';

const Form = (props) => {
  if(props.cardType.cardAction === 'new') { return null; }
  let selectedValue = IDorDL(props);

  return (
    <div className='row chooseRadioCard'>
      <RadioCollection
        {...props}
        name            = 'IDDL'
        selectedValue   = {selectedValue}
        onBlur          = { props.onBlurValidate }
        errorMessage    = { props.validations.cardType()}
      >
        { radioIdDlGroup() }
      </RadioCollection>
    </div>
  )
};

export default Form;
