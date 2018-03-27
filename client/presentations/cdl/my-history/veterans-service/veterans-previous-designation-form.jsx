'use strict';

import React from 'react';
import radioYesNoGroup    from '../../../radio-yes-no-group.jsx';
import RadioCollection    from '../../../radio-selector-collection.jsx';
import { getDL }          from '../../../../helpers/data/card-type';

const VeteransPreviousDesignation = (props) => {
  if (!props.showIf) { return null; }

  return (
    <div className='veterans-previous-designation-form'>
      <h2 className='question missing-translation'>
        Is "Veteran" printed on your commercial driver license?
      </h2>
      <div className='input-container'>
        <fieldset role='group' aria-label='Veteran designation on license choice'>
          <RadioCollection
            {...props}
            name='previouslyDesignated'
          >
            { radioYesNoGroup() }
          </RadioCollection>
        </fieldset>
      </div>
    </div>
  );
};

export default VeteransPreviousDesignation;
