'use strict';

import React from 'react';

import SelectorCollection     from '../../selector-collection.jsx';
import { getDL }              from '../../../helpers/data/card-type';

const OPTIONS = ['Yes', 'No'];
const driversLicense = 'Drivers License';
let cardType = 'ID';

const VeteransPreviousDesignation = (props) => {
  if(getDL(props)) {
    cardType = driversLicense;
  } else {
    cardType;
  }

  if(props.veteransService.isVeteran !== 'Yes') { return null; }
  return (
    <div className='veterans-previous-designation-form'>
      <h4>Is "Veteran" printed on your {cardType}?</h4>
      <div className='input-container'>
        <SelectorCollection
          name='previouslyDesignated'
          values={['Yes', 'No']}
          onChange={ props.onChange }
          selectedValue={props.selectedValue}
        />
      </div>
    </div>
  );
};

export default VeteransPreviousDesignation;
