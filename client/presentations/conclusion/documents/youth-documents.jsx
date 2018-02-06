'use strict';

import React          from 'react';
import {
  isNewDriver,
  needsKnowledgeTest
}          from '../../../helpers/data/youth';

const caLicenseRequirements           = 'https://www.dmv.ca.gov/portal/dmv/detail/pubs/brochures/fast_facts/ffdl05#true';
const newDriverRequirements           = 'https://www.dmv.ca.gov/portal/dmv/detail/dl/dl_info#DEDT';
const driverHandbook                  = 'https://www.dmv.ca.gov/portal/dmv/detail/mobile';
const practiceKnowledgeTest           = 'https://www.dmv.ca.gov/portal/dmv/detail/pubs/interactive/tdrive/exam';

const YouthDocuments = (props) => {
  if (!isNewDriver) { return null; }

  let KnowledgeTest = (props) => {
    if (!needsKnowledgeTest(props)) { return null; }
    return (
      <div className="knowledge-test">
        <h4>You will need to take a knowledge test</h4>
        <p>We recommend studying the <a target='_blank' href={ driverHandbook } ><b>California driver’s handbook</b></a> and <a target='_blank' href={ practiceKnowledgeTest } >trying some practice exams</a> in advance of your visit.</p>
      </div>
    );
  };

  return (
    <div>
      <div className="new-driver-requirements">
        <h4>New driver requirements</h4>
        <p>In order to get a provisional driving permit we will need to see either a <a href={ newDriverRequirements } target='_blank'><b>Certificate of Completion</b> or a <b>Certificate of Enrollment</b></a> from a California Driver Education (classroom), Driver Training (road), or an Integrated Driver Education and Training program.</p>
      </div>
      <KnowledgeTest
        dateOfBirth = {props.dateOfBirth}
        now = {now}
      />
    </div>
  );
};

export default YouthDocuments;
