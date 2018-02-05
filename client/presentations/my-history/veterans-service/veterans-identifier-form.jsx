'use strict';

import React                    from 'react';

import radioYesNoGroup          from '../../radio-yes-no-group.jsx';
import RadioCollection          from '../../radio-selector-collection.jsx';
import MessageBox               from '../../message-box.jsx';
import { getDL }                from '../../../helpers/data/card-type';
import {
  showIdentifierMessage,
  removeIdentifierNotification,
  showPreviousIDHeader,
  showPreviousDLHeader,
  showNewIDHeader,
  showNewDLHeader,
  keepOrAdd
}   from '../../../helpers/data/veteran';

const PreviousIDHeader = (props) => {
  if (!showPreviousIDHeader(props)) { return null; }
  return <h2 className='question'>Would you like to keep "Veteran" on your ID for a $5 fee?</h2>;
};

const PreviousDLHeader = (props) => {
  if (!showPreviousDLHeader(props)) {return null; }
  return <h2 className='question'>Would you like to keep "Veteran" on your Driver License for a $5 fee?</h2>
};

const NewIDHeader = (props) => {
  if (!showNewIDHeader(props)) { return null; }
  return <h2 className='question'>Would you like to add the word "Veteran" on your ID for a $5 fee?</h2>
};

const NewDLHeader = (props) => {
  if (!showNewDLHeader(props)) { return null; }
  return <h2 className='question'>Would you like to add the word "Veteran" on your Driver License for a $5 fee?</h2>
};


const Question = (props) => {
  const className   = keepOrAdd(props) + '-designation';

  return (
    <div className={className}>
      <hr/>
      <PreviousIDHeader {...props} />
      <PreviousDLHeader {...props}/>
      <NewIDHeader {...props}/>
      <NewDLHeader {...props}/>
    </div>
  )
};

const MessageAddAmount = (props) => {
  if (!showIdentifierMessage(props)) { return null; }
  return (
    <MessageBox className = 'info'>
      <div className='veteran-identifier-fee'>
        <p>OK, we will add the $5 to your total fee.</p>
      </div>
    </MessageBox>
  );
};

const MessageRemovingDesignation = (props) => {
  if (!removeIdentifierNotification(props)) { return null; }

  return (
    <MessageBox className='info'>
      <div className='remove-veteran-identifier'>
        <p>OK, we will remove it.</p>
      </div>
    </MessageBox>
  );
};

const VeteransIdentifier = (props) => {

  if(!props.showIf) { return null; }

  return (
    <div className='veterans-identifier-form'>
      <Question {...props} />
      <p>Many organizations give discounts with a valid military ID.</p>
      <div className='input-container'>
        <fieldset>
        <RadioCollection
          {...props}
          name='veteransIdentifier'
        >
          { radioYesNoGroup() }
        </RadioCollection>
        </fieldset>
      </div>

      <MessageAddAmount {...props} />
      <MessageRemovingDesignation {...props} />
    </div>
  );

};

export default VeteransIdentifier;
