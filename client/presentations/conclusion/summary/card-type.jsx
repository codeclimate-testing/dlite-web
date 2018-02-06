'use strict';

import React              from 'react';
import * as dataPresent   from '../../../helpers/data-present';
import {
  getDL,
  getID,
  getNewID,
  getNewDL,
  prettyDL,
  IDorDL,
  getCorrectString
} from '../../../helpers/data/card-type';
import {
  isChangingCard,
  isReplacingCard,
  isRenewingCard,
  isGettingNew,
  hasExistingCard,
  getStringByAction
} from '../../../helpers/data/card-actions';
import { printDate }      from '../../../helpers/print-date.js';


const CardDetails = (props) => {
  if(!dataPresent.currentCardInfo(props.currentCardInfo)) { return null; }

  let date  = printDate(props.currentCardInfo);

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

  let IDNumberString = getStringByAction(props, null, numberText.renew.ID, numberText.replace.ID, null, numberText.update.ID, numberText.correct.ID);
  let DLNumberString = getStringByAction(props, null, numberText.renew.DL, numberText.replace.DL, null, numberText.update.DL, numberText.correct.DL);
  let numberString = getCorrectString(props, DLNumberString, IDNumberString);

  let IDExpirationString = getStringByAction(props, null, expirationText.renew.ID, expirationText.replace.ID, null, expirationText.update.ID, expirationText.correct.ID);
  let DLExpirationString = getStringByAction(props, null, expirationText.renew.DL, expirationText.replace.DL, null, expirationText.update.DL, expirationText.correct.DL);
  let expirationText = getCorrectString(props, IDExpirationString, DLExpirationString);

  return (
    <div>
      <p>{numberString}: {props.currentCardInfo.number}</p>
      <p>{expirationText}: {date}</p>
    </div>
  )
};

const ReplacementReason = (props) => {
  if(!dataPresent.value(props.cardReplacement.reason) && !isReplacingCard(props)) { return null; }
  return (
    <p>Replacement Reason: {props.cardReplacement.reason}</p>
  );
};

const UpdatingItems = (props) => {
  if(!dataPresent.value(props.cardChanges.sections) && !isUpdating(props)){ return null; }

  const updateLabel   = 'Updating sections';
  const correctLabel  = 'Correcting sections';
  const label         = getStringByAction(props, null, null, null, null, updateLabel, correctLabel);

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

  return (<p>{label}: {sections.join(' , ')}</p>)
};


const CardType = (props) => {
  if (!dataPresent.cardType(props.cardType)) { return null; }

  let text = {
    new: {
      ID: 'Applying for new: ID',
      DL: 'Applying for new: Driver License',
      both: 'Applying for new: ID and Driver License'
    },
    renew: {
      ID: 'Renewing: ID',
      DL: 'Renewing: Driver License'
    },
    correct: {
      ID: 'Correcting: ID',
      DL: 'Correcting: Driver License'
    },
    update: {
      ID: 'Updating: ID',
      DL: 'Updating: Driver License'
    },
    replace: {
      ID: 'Replacing: ID',
      DL: 'Replacing: Driver License'
    }
  };
  let bothString = 'Applying for new: ID and Driver License';

  let IDString = getStringByAction(props, text.new.ID, text.renew.ID, text.replace.ID, null, text.update.ID, text.correct.ID);
  let DLString = getStringByAction(props, text.new.DL, text.renew.DL, text.replace.DL, null, text.update.DL, text.correct.DL);
  let textString = getCorrectString(props, DLString, IDString, bothString);


  return (
    <div className='summary-section'>
      <p>{ textString }</p>
      <UpdatingItems {...props} />
      <ReplacementReason {...props} />
      <CardDetails
        {...props}
      />
    </div>
  );
};

export default CardType;
