'use strict';

import React                        from 'react';
import { ballotLanguageIsSelected } from '../../../../helpers/data/application';
import {
  eligibilityRequirementsYes,
  eligibleForCitizen
} from '../../../../helpers/data/voting';
import { ageChecks }                from '../../../../helpers/calculate-age';
import Translator                   from '../../../../i18n/translator-tag.jsx';
import PageSummaryLink              from '../../../../containers/page-summary-link.jsx';
import SummaryItem                  from '../summary-item.jsx';


const mapValToString = (val) => {
  switch(val) {
    case 'en':
    return <Translator tag = 'span' translationPath = 'intro.switchLanguagePage.values.0' />;
    break;
    case 'zh':
    return <Translator tag = 'span' translationPath = 'intro.switchLanguagePage.values.1' />;
    break;
    case 'ja':
    return <Translator tag = 'span' translationPath = 'intro.switchLanguagePage.values.2' />;
    break;
    case 'es':
    return <Translator tag = 'span' translationPath = 'intro.switchLanguagePage.values.3' />;
    break;
    case 'th':
    return <Translator tag = 'span' translationPath = 'intro.switchLanguagePage.values.4' />;
    break;
    case 'tl':
    return <Translator tag = 'span' translationPath = 'intro.switchLanguagePage.values.5' />;
    break;
    case 'ko':
    return <Translator tag = 'span' translationPath = 'intro.switchLanguagePage.values.6' />;
    break;
    case 'km':
    return <Translator tag = 'span' translationPath = 'intro.switchLanguagePage.values.7' />;
    break;
    case 'hi':
    return <Translator tag = 'span' translationPath = 'intro.switchLanguagePage.values.8' />;
    break;
    case 'vi':
    return <Translator tag = 'span' translationPath = 'intro.switchLanguagePage.values.9' />;
    break;
  }
};

const BallotLanguage = (props) => {
  let now = props.now ? props.now : new Date();
  if ((!ageChecks.Under16(props.dateOfBirth, now)) && (eligibleForCitizen(props)) && (eligibilityRequirementsYes(props)))
  {
    return (
      <PageSummaryLink
        {...props}
      >
        <SummaryItem
          title = 'summaryPage.voterRegistration.ballotLanguage'
          text  = { mapValToString(props.ballotLanguage) }
        />
      </PageSummaryLink>
    )
  }
  return null;
};

export default BallotLanguage;

