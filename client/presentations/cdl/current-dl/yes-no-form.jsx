'use strict';

import React              from 'react';
import RadioCollection    from '../../radio-selector-collection.jsx';
import radioYesNoGroup    from '../../radio-yes-no-group.jsx';

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
        { radioYesNoGroup(props.locale) }
      </RadioCollection>
    </div>
  );
};

export default Form;