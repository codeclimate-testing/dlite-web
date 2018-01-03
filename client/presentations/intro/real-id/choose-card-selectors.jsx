'use strict';

import React from 'react';

import SelectorCollection from '../../selector-collection.jsx';
import { mustChooseCard } from '../../../helpers/data/real-id';

const Form = (props) => {
  if (!mustChooseCard(props)) { return null; }

  return (
    <div className='real-id-form'>
      <h4>Which card would you like to fly with?</h4>
      <h5>
        Either your license or your ID card can be made federally
        compliant to fly within the United States, but not both
      </h5>
      <div className='row inner-bottom'>
        <SelectorCollection
          name='realIdDesignation'
          values={['ID', 'DL']}
          onChange={ props.onChange }
          selectedValue={ props.selectedValue }
        />
        <div className='unit spacer' />
      </div>
    </div>
  );
};

export default Form;