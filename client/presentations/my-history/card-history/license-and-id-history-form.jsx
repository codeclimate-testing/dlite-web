'use strict';

import React                  from 'react';
import radioYesNoGroup        from '../../radio-yes-no-group.jsx';
import RadioCollection        from '../../radio-selector-collection.jsx';

import {
  IDOnly
} from '../../../helpers/data/card-type';

const OnlyID = () => {
  return (
    <div className="applying-for-only-id">
      <h2 className='question'>Have you ever had a California driver license or ID card?</h2>
    </div>
  );
};

const IDAndDL = () => {
  return (
    <div className="applying-for-dl">
      <h2 className='question'>Have you ever had a driver license or state-issued ID card?</h2>
      <p>The license or ID card must be issued by a U.S. state or another country.</p>
    </div>
  );
};

const LicenseAndIdHeader = (props) => {
  let licenseAndIdHeader = <IDAndDL />;
  if (IDOnly(props)) {
    licenseAndIdHeader = <OnlyID />;
  }
  return licenseAndIdHeader;
};

const LicenseAndIdHistory = (props) => {
  return (
    <div className='license-and-id-history-form'>
      <LicenseAndIdHeader {...props} />

      <div>
        <fieldset>
          <RadioCollection
            {...props}
            name='isIssued'
            errorMessage = { props.validations.isIssued() }
          >
            { radioYesNoGroup() }
          </RadioCollection>
        </fieldset>
      </div>
    </div>
  );
};

export default LicenseAndIdHistory;
