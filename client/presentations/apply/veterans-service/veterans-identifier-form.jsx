'use strict';

import React from 'react';

import RadioSelector        from '../../radio-selector.jsx';
import RadioCollection      from '../../radio-selector-collection.jsx';
import { getDL }            from '../../../helpers/data/card-type';

const driversLicense = 'Drivers License';
let cardType = 'ID';

const VeteransIdentifier = (props) => {

  if(!(props.veteransService.previouslyDesignated || (props.cardAction !== 'renew' && props.veteransService.isVeteran === 'Yes'))){ return null; }

  if(getDL(props)) {
    cardType = driversLicense;
  } else {
    cardType;
  }

  const newDesignationQuestion = <div className="new-designation"><h4>Would you like to add the word "Veteran" on your {cardType} for a $5 fee?</h4></div>
  const previousDesignationQuestion = <div className="previous-designation"><h4>Would you like to keep "Veteran" on your {cardType} for a $5 fee?</h4></div>
  let keepOrAddVeteranOnCard = '';
  const removeIdentifierNotification = (props.veteransService.previouslyDesignated === 'Yes' && props.veteransService.veteransIdentifier === 'No');

  if(props.veteransService.previouslyDesignated === 'Yes') {
    keepOrAddVeteranOnCard = previousDesignationQuestion;
  } else {
    keepOrAddVeteranOnCard = newDesignationQuestion;
  }

  let values = {
    Yes: 'Yes',
    No: 'No'
  };

  return (
    <div className='veterans-identifier-form'>
      { keepOrAddVeteranOnCard }
      <h5>Many organizations give discounts with a valid military ID.</h5>
      <div className='input-container'>
      <RadioCollection 
        {...props}
        name='veteransIdentifier'
        text={values}
      >
        <RadioSelector 
          value='Yes'
        />
        <RadioSelector 
          value='No'
        />
      </RadioCollection>
      </div>
      { props.veteransService.veteransIdentifier === 'Yes' &&
        <div className='veteran-identifier-fee'>
          <h5>OK, we will add the $5 to your total fee.</h5>
        </div>
      }
      { removeIdentifierNotification &&
        <div className='remove-veteran-identifier'>
          <h5>OK, we will remove it.</h5>
        </div>
      }

    </div>
  );

};

export default VeteransIdentifier;
