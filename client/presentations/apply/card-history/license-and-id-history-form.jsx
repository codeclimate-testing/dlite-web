'use strict';

import React                  from 'react';
import SelectorCollection     from '../../selector-collection.jsx';
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

  return (
    <div className='license-and-id-history-form'>
    { licenseAndIdHeader }

      <div className='inner-bottom'>
        <SelectorCollection
          name='isIssued'
          values={['Yes', 'No']}
          onChange={ props.onChange }
          selectedValue={ props.selectedValue }
        />
      </div>
    </div>
  );
};

export default LicenseAndIdHistory;
