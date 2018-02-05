'use strict';

import React from 'react';

import RadioCollection        from '../../radio-selector-collection.jsx';
import radioIdDlGroup         from '../../radio-id-dl-group.jsx';

import { mustChooseCard }     from '../../../helpers/data/real-id';

const Form = (props) => {
  if (!mustChooseCard(props)) { return null; }

  return (
    <div className='real-id-form'>
      <hr />
      <h2 className='question'>Which card would you like to fly with?</h2>
      <p>
        Either your license or your ID card can be made federally
        compliant to fly within the United States, but not both
      </p>

      <fieldset>
        <RadioCollection
          {...props}
          name          = 'realIdDesignation'
          errorMessage  = { props.validations.designation() }
        >
          { radioIdDlGroup() }
        </RadioCollection>
      </fieldset>

    </div>
  );
};

export default Form;
