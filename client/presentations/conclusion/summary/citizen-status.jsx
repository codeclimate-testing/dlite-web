'use strict';

import React          from 'react';
import translations   from '../../../i18n';
import {
  citizenStatusNotChosen,
  eligibleForCitizen,
  declineToAnswer
 }  from '../../../helpers/data/voting';

const Yes = (props) => {
  if (!eligibleForCitizen(props)) { return null; }
  return (<p> {translations.summaryPage.voterRegistration.citizen}: {translations.shared.commonAnswers.yes}</p>)
};

const No = (props) => {
  if (eligibleForCitizen(props) || declineToAnswer(props.citizenStatus)) { return null; }
  return (<p> {translations.summaryPage.voterRegistration.citizen}: {translations.shared.commonAnswers.no}</p>)
};

const Decline = (props) => {
  if (!declineToAnswer(props.citizenStatus)) { return null; }
  return (<p> {translations.summaryPage.voterRegistration.citizen}: {translations.shared.commonAnswers.declineToAnswer}</p>)
};

const CitizenStatus = (props) => {
  if (citizenStatusNotChosen(props)) { return null; }

  return (
    <div className='summary-section'>
      <Yes citizenStatus = {props.citizenStatus} />
      <No citizenStatus = {props.citizenStatus} />
      <Decline citizenStatus = {props.citizenStatus} />
    </div>
  );
};

export default CitizenStatus;
