'use strict';

import React          from 'react';
import {
  isNewDriver,
  needsKnowledgeTest
}          from '../../../helpers/data/youth';
import Translator     from '../../../i18n/translator-tag.jsx';

const caLicenseRequirements           = 'https://www.dmv.ca.gov/portal/dmv/detail/pubs/brochures/fast_facts/ffdl05#true';
const newDriverRequirements           = 'https://www.dmv.ca.gov/portal/dmv/detail/dl/dl_info#DEDT';
const driverHandbook                  = 'https://www.dmv.ca.gov/portal/dmv/detail/mobile';
const practiceKnowledgeTest           = 'https://www.dmv.ca.gov/portal/dmv/detail/pubs/interactive/tdrive/exam';

const YouthDocuments = (props) => {
  if (!isNewDriver(props)) { return null; }

  let KnowledgeTest = (props) => {
    if (!needsKnowledgeTest(props)) { return null; }
    return (
      <div className="knowledge-test">
        <Translator
          tag             = 'h4'
          translationPath = 'applicationPreparationPage.permitRequirementsSection.body.knowledgeTest'
        />
        <Translator
          tag             = 'p'
          translationPath = 'applicationPreparationPage.permitRequirementsSection.body.testAdvice'
        />
      </div>
    );
  };

  return (
    <div>
      <div className="new-driver-requirements">
        <Translator
          tag             = 'h4'
          translationPath = 'applicationPreparationPage.permitRequirementsSection.body.header'
        />
        <Translator
          tag             = 'p'
          translationPath = 'applicationPreparationPage.permitRequirementsSection.body.needListHeader'
        />
        <Translator
          tag             = 'li'
          translationPath = 'applicationPreparationPage.permitRequirementsSection.body.needListItems.0'
        />
        <Translator
          tag             = 'li'
          translationPath = 'applicationPreparationPage.permitRequirementsSection.body.needListItems.1'
        />
        <Translator
          tag             = 'li'
          translationPath = 'applicationPreparationPage.permitRequirementsSection.body.needListItems.2'
        />
      </div>
      <KnowledgeTest
        dateOfBirth = {props.dateOfBirth}
        now = {props.now}
      />
    </div>
  );
};

export default YouthDocuments;
