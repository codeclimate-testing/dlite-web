'use strict';

import React from 'react';

import { hasValue } from '../../helpers/data/validations';

const PoliticalPartyChoose = (props) => {
  let isSelected = props.politicalPartyChoose.isSelected;
  if (!hasValue(isSelected)) { return null; }

  if (isSelected !== 'Yes') {
    if(isSelected === 'I do not wish to choose a political party') { isSelected = 'No Answer'; }
    return (
      <div className='summary-section'>
        <p> Political Party: {isSelected} </p>
      </div>
    );
  }

  return (
    <div className='summary-section'>
      <p> Political Party: {props.politicalPartyChoose.politicalPartyChoose} </p>
      <p> Political Party Preference: {isSelected} </p>
    </div>
  );
};

export default PoliticalPartyChoose;
