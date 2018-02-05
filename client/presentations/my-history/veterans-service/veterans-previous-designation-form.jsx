'use strict';

import React from 'react';

import radioYesNoGroup                  from '../../radio-yes-no-group.jsx';
import RadioCollection                  from '../../radio-selector-collection.jsx';
import { getDL }                        from '../../../helpers/data/card-type';

const headerDL = 'Is "Veteran" printed on your Driver License?';
const headerID = 'Is "Veteran" printed on your ID?';

const VeteransPreviousDesignation = (props) => {
  if (!props.showIf) { return null; }

  const headerText = getDL(props) ? headerDL : headerID;

  return (
    <div className='veterans-previous-designation-form'>
      <h2 className='question'>{headerText}</h2>
      <div className='input-container'>
        <fieldset>
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
