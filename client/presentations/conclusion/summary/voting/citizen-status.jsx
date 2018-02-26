'use strict';

import React          from 'react';
import translations   from '../../../../i18n';
import {
  citizenStatusNotChosen,
  eligibleForCitizen,
  declineToAnswer,
  eligibilityNotChosen
 }  from '../../../../helpers/data/voting';
import { hasValue }                 from '../../../../helpers/data/validations';
import { ageChecks }                from '../../../../helpers/calculate-age';
import PageSummaryLink              from '../Page-summary-link.jsx';
import SummaryItem                  from '../summary-item.jsx';
import * as dataPresent             from '../../../../helpers/data-present';


const Yes = (props) => {
  if (!eligibleForCitizen(props)) { return null; }
  return (<SummaryItem
	          title={translations.summaryPage.voterRegistration.citizen}
	          text={translations.shared.commonAnswers.yes}
	        />)
};

const No = (props) => {
  if (eligibleForCitizen(props) || declineToAnswer(props.citizenStatus)) { return null; }
  return (<SummaryItem
	          title={translations.summaryPage.voterRegistration.citizen}
	          text={translations.shared.commonAnswers.no}
	        />)
};

const Decline = (props) => {
  if (!declineToAnswer(props.citizenStatus)) { return null; }
  return (<SummaryItem
	          title={translations.summaryPage.voterRegistration.citizen}
	          text={translations.shared.commonAnswers.declineToAnswer}
	        />)
};

const CitizenStatus = (props) => {
    if (citizenStatusNotChosen(props)) { return null; }
	  let notAvailable = <div className='translation-missing'>Not Available</div>
	  let now = props.now ? props.now : new Date(); 
	    if (ageChecks.Under16(props.dateOfBirth, now)) {
	    return (
	      <SummaryItem
	        title={translations.summaryPage.voterRegistration.citizen}
	        text={notAvailable}
	      />
	    )
	  }
	  if ((citizenStatusNotChosen(props)) && (declineToAnswer(props.citizenStatus))) {
	    return (
	      <PageSummaryLink
	        to='/voting-registration/citizenship'
	        name='citizenship'
	      >
	        <SummaryItem
	          title={translations.summaryPage.voterRegistration.citizen}
	          text={translations.shared.commonAnswers.declineToAnswer}
	        />
	      </PageSummaryLink>
	    )
	  }
	  return (
	    <PageSummaryLink
	      to='/voting-registration/citizenship'
	      name='citizenship'
	    >
	      <Yes citizenStatus={props.citizenStatus} />
	      <Decline citizenStatus={props.citizenStatus} />
	      <No citizenStatus={props.citizenStatus} /> 
	    </PageSummaryLink>
	  )
	};

export default CitizenStatus;
