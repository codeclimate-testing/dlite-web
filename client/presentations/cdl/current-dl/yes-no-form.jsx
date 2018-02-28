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
        name          = 'hasCurrentDL'
        errorMessage  = { props.validations.hasCurrentDL() }
        selectedValue = {props.currentCardInfo.hasCurrentDL}
      >
        { radioYesNoGroup() }
      </RadioCollection>
    </div>
  );
};

export default Form;