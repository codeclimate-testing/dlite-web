'use strict';

import React                        from 'react';
import { ballotLanguageIsSelected } from '../../../../helpers/data/application';
import translations                 from '../../../../i18n';
import PageSummaryLink              from '../page-summary-link.jsx';
import SummaryItem                  from '../summary-item.jsx';


const mapValToString = (val) => {
  let translationAddress    = translations.intro.switchLanguagePage.values;
  switch(val) {
    case 'en':
    return translationAddress[0];
    break;
    case 'zh':
    return translationAddress[1];
    break;
    case 'ja':
    return translationAddress[2];
    break;
    case 'es':
    return translationAddress[3];
    break;
    case 'th':
    return translationAddress[4];
    break;
    case 'tl':
    return translationAddress[5];
    break;
    case 'ko':
    return translationAddress[6];
    break;
    case 'km':
    return translationAddress[7];
    break;
    case 'hi':
    return translationAddress[8];
    break;
    case 'vi':
    return translationAddress[9];
    break;
  }
};

const BallotLanguage = (props) => {
  if (!ballotLanguageIsSelected(props.ballotLanguage)) { return null; }

  return (
    <PageSummaryLink
      to='/voting-registration/language'
      name='choosePoliticalParty'
    >
      <SummaryItem
        title={translations.summaryPage.voterRegistration.ballotLanguage}
        text={mapValToString(props.ballotLanguage)}
      />
    </PageSummaryLink>
  )
};

export default BallotLanguage;
