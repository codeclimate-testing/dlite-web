'use strict';

import React                    from 'react';

import radioYesNoGroup          from '../../radio-yes-no-group.jsx';
import RadioCollection          from '../../radio-selector-collection.jsx';
import MessageBox               from '../../message-box.jsx';
import { getDL }                from '../../../helpers/data/card-type';
import { showIdentifierPage }   from '../../../helpers/data/veteran';
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
      <hr/>
      <h2 className='question'>{text}</h2>
    </div>
  )
};

const MessageAddAmount = (props) => {
  if (props.veteransService.veteransIdentifier !== 'Yes') { return null; }
  return (
    <MessageBox className = 'info'>
      <div className='veteran-identifier-fee'>
        <p>OK, we will add the $5 to your total fee.</p>
      </div>
    </MessageBox>
  );
};

const MessageRemovingDesignation = (props) => {
  const removeIdentifierNotification = (props.veteransService.previouslyDesignated === 'Yes' && props.veteransService.veteransIdentifier === 'No');
  if (!removeIdentifierNotification) { return null; }

  return (
    <MessageBox className='info'>
      <div className='remove-veteran-identifier'>
        <p>OK, we will remove it.</p>
      </div>
    </MessageBox>
  );
};

const VeteransIdentifier = (props) => {

  if(showIdentifierPage(props)) {
    return (
      <div className='veterans-identifier-form'>
        <Question {...props} />
        <p>Many organizations give discounts with a valid military ID.</p>
        <div className='input-container'>
          <RadioCollection
            {...props}
            name='veteransIdentifier'
          >
            { radioYesNoGroup() }
          </RadioCollection>
        </div>

        <MessageAddAmount {...props} />
        <MessageRemovingDesignation {...props} />
      </div>
    );
  }
  return null;
};

export default VeteransIdentifier;
