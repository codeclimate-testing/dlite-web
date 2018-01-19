'use strict';

import React          from 'react';
import { ageChecks }  from '../../../helpers/calculate-age';

const YouthDocuments = (props) => {
  
  const caLicenseRequirements           = 'https://www.dmv.ca.gov/portal/dmv/detail/pubs/brochures/fast_facts/ffdl05#true';
  const newDriverRequirements           = 'https://www.dmv.ca.gov/portal/dmv/detail/dl/dl_info#DEDT';
  const driverHandbook                  = 'https://www.dmv.ca.gov/portal/dmv/detail/mobile';
  const practiceKnowledgeTest           = 'https://www.dmv.ca.gov/portal/dmv/detail/pubs/interactive/tdrive/exam';

  let now = props.now ? props.now : new Date();
  if( ageChecks.GreaterThanEqual18(props.dateOfBirth, now) || ageChecks.Under15Half(props.dateOfBirth, now ) || props.licenseIssued === 'Yes') {return null;}

  let NewDriver = (props) => {
    return (
      <div className="new-driver-requirements">
        <h4>New driver requirements</h4>
        <p>In order to get a provisional driving permit we will need to see either a <a href={ newDriverRequirements } target='_blank'><b>Certificate of Completion</b> or a <b>Certificate of Enrollment</b></a> from a California Driver Education (classroom), Driver Training (road), or an Integrated Driver Education and Training program.</p> 
      </div>
    )
  };

  let KnowledgeTest = (props) => {
    if(ageChecks.GreaterThanEqual17Half(props.dateOfBirth, now)) { return null; }
    return (
      <div className="knowledge-test">
        <h4>You will need to take a knowledge test</h4>
        <p>We recommend studying the <a target='_blank' href={ driverHandbook } ><b>California driver’s handbook</b></a> and <a target='_blank' href={ practiceKnowledgeTest } >trying some practice exams</a> in advance of your visit.</p>
      </div>
    )
  };

  return (
    <div>
      <NewDriver/>
      <KnowledgeTest
        dateOfBirth = {props.dateOfBirth}
        now = {now}
      />
    </div>
  );
};

export default YouthDocuments;
