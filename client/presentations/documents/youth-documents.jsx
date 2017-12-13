'use strict';

import React          from 'react';
import { ageChecks }  from '../../helpers/calculate-age';

const YouthDocuments = (props) => {
  
  const caLicenseRequirements           = 'https://www.dmv.ca.gov/portal/dmv/detail/pubs/brochures/fast_facts/ffdl05#true';
  const newDriverRequirements           = 'https://www.dmv.ca.gov/portal/dmv/detail/dl/dl_info#DEDT';
  const driverHandbook                  = 'https://www.dmv.ca.gov/portal/dmv/detail/mobile';
  const practiceKnowledgeTest           = 'https://www.dmv.ca.gov/portal/dmv/detail/pubs/interactive/tdrive/exam';

  if( ageChecks.GreaterThanEqual18(props.dateOfBirth) || ageChecks.Under15Half(props.dateOfBirth) || props.licenseIssued !== 'No' ) {return null;}

  let divList = [];

  divList.push(
    <div key='new-driver-requirements'>
      <h4 className="new-driver-requirements">New driver requirements</h4>
      <p>In order to get a provisional driving permit we will need to see either a <a href={ newDriverRequirements } target='_blank'><b>Certificate of Completion</b> or a <b>Certificate of Enrollment</b></a> from a California Driver Education (classroom), Driver Training (road), or an Integrated Driver Education and Training program.</p> 
    </div>
  );

  if( ageChecks.Under17Half(props.dateOfBirth) ) {
    divList.push(
      <div key='knowledge-test'>
        <h4 className="knowledge-test">You will need to take a knowledge test</h4>
        <p>We recommend studying the <a target='_blank' href={ driverHandbook } ><b>California driver’s handbook</b></a> and <a target='_blank' href={ practiceKnowledgeTest } >trying some practice exams</a> in advance of your visit.</p>
      </div>
    )
  };

  return (
    <div>
      { divList }
    </div>
  );
};

export default YouthDocuments;
