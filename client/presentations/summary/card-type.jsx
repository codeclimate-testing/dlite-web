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
  let IDorDL = props.cardType[props.cardAction];

  const numberText = {
    renew: {
      ID: 'Renewal ID number',
      DL: 'Renewal Driver License number'
    },
    update: {
      ID: 'Updating ID number',
      DL: 'Updating Driver License number'
    },
    correct: {
      ID: 'Changing ID number',
      DL: 'Changing Driver License number'
    },
    replace: {
      ID: 'Replacing ID number',
      DL: 'Replacing Driver License number'
    }
  };

  const expirationText = {
    renew: {
      ID: 'Expiration date of ID to renew',
      DL: 'Expiration date of Driver License to renew'
    }, 
    update: {
      ID: 'Expiration date of ID to update',
      DL: 'Expiration date of Driver License to update'
    },
    correct: {
      ID: 'Expiration date of ID to correct',
      DL: 'Expiration date of Driver License to correct'
    },
    replace: {
      ID: 'Expiration date of ID to replace',
      DL: 'Expiration date of Driver License to replace'
    }
  };

  return (
    <div>
      <p>{numberText[props.action][IDorDL]}: {props.currentCardInfo.number}</p>
      <p>{expirationText[props.action][IDorDL]}: {date}</p>
    </div>
  )
};

const Renew = (props) => {
  if(!dataPresent.value(props.cardType.renew)) { return null;}

  let text = {
    ID: 'Renewing: ID',
    DL: 'Renewing: Driver License'
  };
  
  return (
    <div>
      <p>{ text[props.cardType.renew] } </p>
      <CardDetails 
        {...props} 
        action = 'renew'
      />
    </div>
  );
};

const Change = (props) => {
  if(!dataPresent.value(props.cardType.change)) { return null; }

  let text = {
    correct: {
      ID: 'Correcting: ID',
      DL: 'Correcting: Driver License'
    },
    update: {
      ID: 'Updating: ID',
      DL: 'Updating: Driver License'
    }
  };

  return (
    <div>
      <p>{ text[props.cardChanges.correctOrUpdate][props.cardType.change] }</p>
      <UpdatingItems {...props} />
      <CardDetails 
        {...props}
        action={props.cardChanges.correctOrUpdate}
      />
    </div>
  )
};

const UpdatingItems = (props) => {
  if(!dataPresent.value(props.cardChanges.sections)){ return null; }
  
  const updateLabel   = 'Updating sections';
  const correctLabel  = 'Correcting sections';
  const label         = props.cardChanges.correctOrUpdate === 'update' ? updateLabel : correctLabel;
  
  const text = {
    name              : 'Name',
    dateOfBirth       : 'Date of birth',
    sex               : 'Sex',
    address           : 'Address',
    licenseType       : 'What you can drive',
    endorsements      : 'Endorsements on your license',
    restrictions      : 'Add or remove a restriction',
    other             : props.cardChanges.other
  };

  let sections = props.cardChanges.sections.map( section => {
    return text[section];
  });

  return (<p>{label}: {sections.join(' and ')}</p>)
};

const Replace = (props) => {
  if(!dataPresent.value(props.cardType.replace)) { return null; }

  let text = {
    ID: 'Replacing: ID',
    DL: 'Replacing: Driver License'
  };

  return (
    <div>
      <p>{ text[props.cardType.replace]}</p>
      <ReplacementReason {...props} />
      <CardDetails
        {...props}
        action={props.cardReplacement}
      />
    </div>
  )
};

const ReplacementReason = (props) => {
  if(!dataPresent.value(props.cardReplacement.reason)) { return null; }
  return (
    <p>Replacement Reason: {props.cardReplacement.reason}</p>
  );
};


const CardType = (props) => {
  if (!dataPresent.cardType(props.cardType)) { return null; }

  return (
    <div className='summary-section'>
      <NewCard {...props} />
      <Renew {...props} />
      <Change {...props} />
      <Replace {...props} />
    </div>
  );
};

export default CardType;
