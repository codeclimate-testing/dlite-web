'use strict';

import React from 'react';

import RadioSelector        from '../../radio-selector.jsx';
import RadioCollection      from '../../radio-selector-collection.jsx';
import { getDL }            from '../../../helpers/data/card-type';

const questionText = {
  previous: {
    ID: 'Would you like to keep "Veteran" on your ID for a $5 fee?',
    DL: 'Would you like to keep "Veteran" on your Driver License for a $5 fee?'
  },
  new: {
    ID: 'Would you like to add the word "Veteran" on your ID for a $5 fee?',
    DL: 'Would you like to add the word "Veteran" on your Driver License for a $5 fee?'
  }
}

const Question = (props) => {
  const keepOrAdd   = props.veteransService.previouslyDesignated === 'Yes' ? 'previous' : 'new';
  const IDorDL      = getDL(props) ? 'DL' : 'ID'; 
  const className   = keepOrAdd + '-designation';
  let text = questionText[keepOrAdd][IDorDL];

  return (
    <div className={className}>
      <h4>{text}</h4>
    </div>
  )
};

const VeteransIdentifier = (props) => {

  if(!(props.veteransService.previouslyDesignated || (props.cardAction !== 'renew' && props.veteransService.isVeteran === 'Yes'))){ return null; }

  const removeIdentifierNotification = (props.veteransService.previouslyDesignated === 'Yes' && props.veteransService.veteransIdentifier === 'No');

  if(props.veteransService.previouslyDesignated || (props.cardAction !== 'renew' && props.veteransService.isVeteran === 'Yes')) {
    return (
      <div className='veterans-identifier-form'>
       <Question {...props} />
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
