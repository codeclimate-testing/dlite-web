'use strict';

import React                from 'react';
import { gettingRealID }    from '../../../helpers/data/real-id';


const realIDInformationPage = 'https://www.dmv.ca.gov/portal/dmv/detail/realid';
const caLicenseRequirements = 'https://www.dmv.ca.gov/portal/dmv/detail/pubs/brochures/fast_facts/ffdl05#true'
const ab60Checklist     = 'https://www.dmv.ca.gov/portal/dmv/detail/online/ab60_checklist';
const legalPresenceList = 'https://www.dmv.ca.gov/portal/dmv/detail/dl/dl_info#BDLP';


const RealIdDocuments = (props) => {

  if (gettingRealID(props)){
    return (
      <div key='real-id-documents'>
        <h4 className="real-id-documents">Real ID birth date, name and legal presence proof</h4>
        <p>
        We need to verify your date of birth and what we call your “legal presence”.
        Documents should use your true, full name that you use today or we will need
        additional documents proving your true, full name will be required.
        See our <a target="_blank" href={ realIDInformationPage }>Real ID information page</a> for
        details on acceptable date of birth and legal presence documents required to receive a Real ID compliant card.
        </p>
        <p>From that list we will need either:</p>
        <ul className='bullet-list'>
          <li>A single document that proves both your date of birth and legal presence.</li>
          <li>Or one document for your date of birth and one document for your legal presence.</li>
        </ul>
        <p>
        If you were married or divorced, adopted or have changed your name through the courts, please
        make sure to also bring <a target="_blank" href={ caLicenseRequirements }>proof of the true, full name</a>.
        </p>
      </div>
    );
  } else {
    return (
      <div key='legal-presence-documents'>
        <h4 className="legal-presence-documents">Legal presence</h4>
        <p>All applicants need to prove their date of birth. Unless you’re AB 60, you need to prove legal presence.
        Please refer to our <a target="_blank" href={ ab60Checklist }>AB 60 checklist tool</a> and
        our <a target="_blank" href={ legalPresenceList }>date of birth and legal presence list</a>.
        </p>
      </div>
    )
  }
};

export default RealIdDocuments;
