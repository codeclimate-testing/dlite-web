'use strict';

import React              from 'react';
import RadioCollection    from '../../radio-selector-collection.jsx';
import RadioSelector      from '../../radio-selector.jsx';
import translations       from '../../../i18n';

const Form = (props) => {
  return (
    <div className = 'cdl-current-dl-yes-no'>
      <h2 className='question'>Do you currently have a California driver license?</h2>

      <RadioCollection
        {...props}
        name          = 'isIssued'
        errorMessage  = { props.validations.isIssued() }
        selectedValue = {props.currentCardInfo.isIssued}
      >
        <RadioSelector
          value='inter'
          text='Interstate driving Non-Excepted'
        />
        <RadioSelector
          value='intra'
          text='Intrastate driving Non-Excepted'
        />
      </RadioCollection>
    </div>
  );
};

export default Form;