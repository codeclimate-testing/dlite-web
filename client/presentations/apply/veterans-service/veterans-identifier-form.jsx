'use strict';

import React from 'react';

import HomeLink               from '../../home-link.jsx';
import SelectorCollection     from '../../selector-collection.jsx';
import { getDL }              from '../../../helpers/data/card-type';

const driversLicense = 'Drivers License';
let cardType = 'ID';

const VeteransIdentifier = (props) => {
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

  if(props.veteransService.previouslyDesignated) {
    return (
      <div className='veterans-identifier-form'>
       { keepOrAddVeteranOnCard }
       <h5>Many organizations give discounts with a valid military ID.</h5>
       <div className='input-container'>
         <SelectorCollection
           name='veteransIdentifier'
           values={['Yes', 'No']}
           onChange={ props.onChange }
           selectedValue={props.selectedValue}
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
  } else {
  return null;
  };
};

export default VeteransIdentifier;
