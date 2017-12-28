'use strict';

import React from 'react';
import * as dataPresent from '../../helpers/data-present';
import {
  getDL,
  getID,
  getNewID,
  getNewDL,
  prettyDL
} from '../../helpers/data/card-type';
import { printDate } from '../../helpers/print-date.js';

const NewCard = (props) => {
  let newID = getNewID(props);
  let newDL = getNewDL(props);
  if(!newID && !newDL) { return null;}

  let values = [];
  if(newID) {
    values.push('ID');
  } 
  if(newDL) {
    values.push('Driver License')
  }
  return <p>Applying for new: { values.join(' and ') } </p>;
};

const CardDetails = (props) => {
  if(!dataPresent.currentCardInfo(props.currentCardInfo)) { return null; }
  
  let date  = printDate(props.currentCardInfo);
  
  return (
    <div>
      <p>Renewal {props.cardName} number: {props.currentCardInfo.number}</p>
      <p>Renewal {props.cardName} expiration date: {date}</p>
    </div>
  )
};

const Renew = (props) => {
  if(!dataPresent.value(props.cardType.renew)) { return null;}
  let cardName = prettyDL(props);

  return (
    <div>
      <p>Renewing: { cardName } </p>
      <CardDetails 
        {...props}
        cardName = { cardName }
      />
    </div>
  );
}

const CardType = (props) => {
  if (!dataPresent.cardType(props.cardType)) { return null; }

  return (
    <div className='summary-section'>
      <NewCard {...props} />
      <Renew {...props} />
    </div>
  );
};

export default CardType;
