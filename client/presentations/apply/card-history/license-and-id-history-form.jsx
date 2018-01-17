'use strict';

import React                  from 'react';
import RadioSelector        from '../../radio-selector.jsx';
import RadioCollection      from '../../radio-selector-collection.jsx';

import { 
  getID,
  getDL
} from '../../../helpers/data/card-type';

const onlyID = <div className="applying-for-only-id"><h2 className='question'>Have you ever had a California driver license or ID card?</h2></div>
const IDAndDL = <div className="applying-for-dl"><h2 className='question'>Have you ever had a driver license or state-issued ID card?</h2>
                <p>The license or ID card must be issued by a U.S. state or another country.</p></div>
let licenseAndIdHeader = '';

const LicenseAndIdHistory = (props) => {
  if (getID(props) && !getDL(props)) {
    licenseAndIdHeader = onlyID;
  } else {
    licenseAndIdHeader = IDAndDL;
  }

  let values = {
    Yes: 'Yes',
    No: 'No'
  };

  return (
    <div className='license-and-id-history-form'>
    { licenseAndIdHeader }

      <div>
        <RadioCollection
          {...props}
          name='isIssued'
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
    </div>
  );
};

export default LicenseAndIdHistory;
