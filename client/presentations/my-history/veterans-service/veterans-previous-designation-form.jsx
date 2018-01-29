'use strict';

import React from 'react';

import radioYesNoGroup      from '../../radio-yes-no-group.jsx';
import RadioCollection      from '../../radio-selector-collection.jsx';
import { getDL }            from '../../../helpers/data/card-type';

const header = {
  DL: 'Is "Veteran" printed on your Driver License?',
  ID: 'Is "Veteran" printed on your ID?'
};

const VeteransPreviousDesignation = (props) => {
  if(props.veteransService.isVeteran !== 'Yes' || props.cardType.cardAction !== 'renew') { return null; }

  const headerText = getDL(props) ? header.DL : header.ID;

  return (
    <div className='veterans-previous-designation-form'>
      <h2 className='question'>{headerText}</h2>
      <div className='input-container'>
        <RadioCollection
          {...props}
          name='previouslyDesignated'
        >
          { radioYesNoGroup() }
        </RadioCollection>
      </div>
    </div>
  );
};

export default VeteransPreviousDesignation;
