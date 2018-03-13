'use strict';

import React from 'react';
import * as dataPresent from '../../../../helpers/data-present';
import PageSummaryLink  from '../../../../containers/page-summary-link.jsx';
import SummaryItem      from '../summary-item.jsx';
import { isVeteran }    from '../../../../helpers/data/veteran';
import translations     from '../../../../i18n';

const BenefitInfo = (props) => {
  if (!isVeteran(props)) { return null; }
  return (
    <SummaryItem
    title= { translations[props.locale].summaryPage.myHistory.getBenefitsInformation + ':'}
      text={props.veteransService.receiveBenefits}
    />
  )
};

const PrintedOnCard = (props) => {
  if (!isVeteran(props)) { return null; }
  return (
    <SummaryItem
    title= { translations[props.locale].summaryPage.myHistory.veteranPrintedOnCard + ':'}
      text={props.veteransService.veteransIdentifier}
    />
  )
};

const VeteransService = (props) => {
  if (!dataPresent.veteransService(props.veteransService)) { return null; }
  let locale = props.locale;
  return (
    <PageSummaryLink
      {...props}
    >
      <SummaryItem
        title= { translations[locale].summaryPage.myHistory.veteran + ':'}
        text={props.veteransService.isVeteran}
      />

      <BenefitInfo    veteransService={props.veteransService} locale={locale} />
      <PrintedOnCard  veteransService={props.veteransService} locale={locale}/>

    </PageSummaryLink>
  )
};

export default VeteransService;
