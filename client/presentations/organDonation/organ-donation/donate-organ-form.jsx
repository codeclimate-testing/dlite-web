'use strict';

import React              from 'react';
import radioYesNoGroup    from '../../radio-yes-no-group.jsx';
import RadioCollection    from '../../radio-selector-collection.jsx';
import MessageBox         from '../../message-box.jsx';

const MessageForYesChoice = (props) => {
  return (
    <MessageBox className='info'>
      <div className = 'donate-organ-yes-info'>
        <p>Answering <em>Yes</em> adds your name to the Donate Life California Organ and
        Tissue Donor Registry, and a pink "donor" dot will appear on your DL/ID card.</p>
      </div>
    </MessageBox>
  );
};

const MessageForNoChoice = (props) => {
  return (
    <MessageBox className='info'>
      <div className = 'donate-organ-no-info'>
        <h4>Answering <em>No</em> will not remove your name from the registry.</h4>
        <p>If you wish to remove your name from the registry, you must contact Donate
        Life California. DMV can remove the pink dot from your DL/ID card but cannot remove you from the registry.</p>
      </div>
    </MessageBox>
  );
};

const Message = (props) => {
  let value = props.organDonation.donateOrgan;

  if (value === 'Yes') {
    return <MessageForYesChoice />
  } else if (value === 'No') {
    return <MessageForNoChoice />
  } else {
    return null;
  }
};


const DonateOrgan = (props) => {
  return (
    <div className='donate-organ-form'>
      <h2 className='question'>Do you wish to be an organ or tissue donor?</h2>
      <p>
        You must mark <em>Yes</em> to maintain the donor dot on your drivers licence.
      </p>

      <RadioCollection
        {...props}
        name='donateOrgan'
      >
        { radioYesNoGroup() }
      </RadioCollection>

      <Message {...props} />
    </div>
  );
};

export default DonateOrgan;
