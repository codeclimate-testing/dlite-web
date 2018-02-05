'use strict';

import React            from 'react';
import RadioCollection  from '../../radio-selector-collection.jsx';
import radioYesNoGroup  from '../../radio-yes-no-group.jsx';

const FormControls = (props) => {
  return (
    <div className='endorsement-toggle'>
      <hr/>
      <h2 className='question'>Do you need any professional endorsements?</h2>
      <p>Firefighters and ambulance drivers need special endorsements to drive their vehicles.</p>
      <div className='row'>
        <fieldset>
          <RadioCollection
            {...props}
            name='needEndorsement'
            onBlur = { props.onBlurValidate }
            errorMessage={ props.validations.needEndorsement() }
          >
            {radioYesNoGroup()}
          </RadioCollection>
        </fieldset>
      </div>
    </div>
  );
};

export default FormControls;
