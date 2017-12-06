'use strict';

import React from 'react';

const YouthDocuments = (props) => {
  
  const caLicenseRequirements           = 'https://www.dmv.ca.gov/portal/dmv/detail/pubs/brochures/fast_facts/ffdl05#true';
  const newDriverRequirements           = 'https://www.dmv.ca.gov/portal/dmv/detail/dl/dl_info#DEDT';
  const driverHandbook                  = 'https://www.dmv.ca.gov/portal/dmv/detail/mobile';
  const practiceKnowledgeTest           = 'https://www.dmv.ca.gov/portal/dmv/detail/pubs/interactive/tdrive/exam';

  if((props.age >= 18 || props.age < 15.5 ) || props.licenseIssued !== 'No') {return null;}

  let divList = [];

  divList.push(
    <div key='new-driver-requirements'>
      <h4 className="new-driver-requirements">New driver requirements</h4>
      <p>In order to get a provisional driving permit we will need to see either a <a href={ newDriverRequirements } target='_blank'><b>Certificate of Completion</b> or a <b>Certificate of Enrollment</b></a> from a California Driver Education (classroom), Driver Training (road), or an Integrated Driver Education and Training program.</p> 
    </div>
  );

  if(props.age < 17.5 ) {
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
