'use strict';

import React          from 'react';
import translations   from '../../../../i18n';
import { hasValue }   from '../../../../helpers/data/validations';
import {
  eligibilityRequirementsYes,
  declineToAnswer
}  from '../../../../helpers/data/voting';

const Yes = (props) => {
  if (!eligibilityRequirementsYes(props)) { return null; }
  return (<p> {translations.summaryPage.voterRegistration.eligible}: {translations.shared.commonAnswers.yes}</p>)
};

const No = (props) => {
  if (eligibilityRequirementsYes(props) || declineToAnswer(props.eligibilityRequirements)) { return null; }
  return (<p> {translations.summaryPage.voterRegistration.eligible}: {translations.shared.commonAnswers.no}</p>)
};

const Decline = (props) => {
  if (!declineToAnswer(props.eligibilityRequirements)) { return null; }
  return (<p> {translations.summaryPage.voterRegistration.eligible}: {translations.shared.commonAnswers.declineToAnswer}</p>)
};
const EligibilityRequirements = (props) => {
  let value = props.eligibilityRequirements;
  if (!hasValue(value)) { return null; }

  return (
    <div className='summary-section'>
      <Yes      eligibilityRequirements = {props.eligibilityRequirements} />
      <No       eligibilityRequirements = {props.eligibilityRequirements} />
      <Decline  eligibilityRequirements = {props.eligibilityRequirements} />
    </div>
  );
};

export default EligibilityRequirements;
