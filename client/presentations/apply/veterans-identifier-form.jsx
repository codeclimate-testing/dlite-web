'use strict';

import React from 'react';

import HomeLink               from '../home-link.jsx';
import SelectorCollection     from '../selector-collection.jsx';

const OPTIONS = ['Yes', 'No'];
const driversLicense = 'Drivers License';
let cardType = 'ID';

const Form = (props) => {
  if(props.cardType.DL) {
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

  return (
    <div className='veterans-identifier-form'>
      { keepOrAddVeteranOnCard }
      <h5>Many organizations give discounts with a valid military ID.</h5>
      <div className='input-container'>
        <SelectorCollection
          name='veteransIdentifier'
          values={OPTIONS}
          onChange={ props.onChange }
          selectedValue={props.veteransService.veteransIdentifier}
        />
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

export default Form;
