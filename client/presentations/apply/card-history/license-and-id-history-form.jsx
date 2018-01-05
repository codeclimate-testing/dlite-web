'use strict';

import React                  from 'react';
import RadioSelector        from '../../radio-selector.jsx';
import RadioCollection      from '../../radio-selector-collection.jsx';

import { 
  getID,
  getDL
} from '../../../helpers/data/card-type';

const onlyID = <div className="applying-for-only-id"><h4>Have you ever had a California driver license or ID card?</h4></div>
const IDAndDL = <div className="applying-for-dl"><h4>Have you ever had a driver license or state-issued ID card?</h4>
                <h5>The license or ID card must be issued by a U.S. state or another country.</h5></div>
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

      <div className='inner-bottom'>
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
