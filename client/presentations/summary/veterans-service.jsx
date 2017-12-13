'use strict';

import React from 'react';
import * as dataPresent from '../../helpers/data-present';

const VeteransService = (props) => {
  if (!dataPresent.veteransService(props.veteransService)) { return null; }

  let content = [];

  if (props.veteransService.isVeteran) {
     content.push(<p key='is-veteran'> Is veteran: {props.veteransService.isVeteran} </p>);
  }

  if(props.veteransService.isVeteran === 'Yes') {
    if (props.veteransService.receiveBenefits) {
      content.push(<p key='veteran-receive-benefits'> Receive veterans benefits: {props.veteransService.receiveBenefits} </p>);
    }
    if (props.veteransService.veteransIdentifier) {
      content.push(<p key='veterans-identifier'> Veterans identifier on license: {props.veteransService.veteransIdentifier} </p>);
    }
  }

  return (
    <div className='summary-section'>
      { content }
    </div>
  );
};

export default VeteransService;