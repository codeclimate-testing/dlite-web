'use strict';

import React from 'react';

import {
  citizenStatusNotChosen
 }  from '../../../helpers/data/voting';
 import {
  getStringByStatus
 }  from '../../../helpers/data/summary';

const CitizenStatus = (props) => {
  if (citizenStatusNotChosen(props)) { return null; }

  let yesText = 'Yes';
  let noText = 'No';
  let declineText = 'Decline to answer';

  let text = getStringByStatus(props.citizenStatus, yesText, noText, declineText);

  return (
    <div className='summary-section'>
      <p> US Citizen: {text} </p>
    </div>
  );
};

export default CitizenStatus;
