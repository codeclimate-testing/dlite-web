'use strict';

import React              from 'react';
import RadioSelector      from '../../radio-selector.jsx';
import RadioCollection    from '../../radio-selector-collection.jsx';

const DonateOrgan = (props) => {
  let values = {
    Yes: 'Yes',
    No: 'No'
  };
  return (
    <div className='donate-organ-form'>
      <h4>Do you wish to be an organ or tissue donor?</h4>
      <p><em>(optional)</em></p>
      <p>You must mark <em>Yes</em> to maintain the donor dot on your drivers licence.</p>
      <div className='inner-bottom'>
        <RadioCollection
          {...props}
          name='donateOrgan'
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

      <div className='inner-bottom'>
        { props.organDonation.donateOrgan === 'Yes' &&
          <div className = 'donate-organ-yes-info'>
            <p>Answering <em>Yes</em> adds your name to the Donate Life California Organ and
            Tissue Donor Registry, and a pink "donor" dot will appear on your DL/ID card.</p>
          </div>
        }

      { props.organDonation.donateOrgan === 'No' &&
        <div className = 'donate-organ-no-info'>
          <h4>Answering <em>No</em> will not remove your name from the registry.</h4>
          <p>If you wish to remove your name from the registry, you must contact Donate
          Life California. DMV can remove the pink dot from your DL/ID card but cannot remove you from the registry.</p>
        </div>
      }
      </div>
    </div>
  );
};

export default DonateOrgan;
