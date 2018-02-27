'use strict';

import React            from "react";
import * as dataPresent from '../../../../helpers/data-present';
import { printDate }    from '../../../../helpers/print-date';
import PageSummaryLink  from '../Page-summary-link.jsx';
import SummaryItem      from '../summary-item.jsx';
import translations     from '../../../../i18n';

const Address = (props) => {
  if (!dataPresent.address(props.address.home)) { return null; }
  let locale          = props.locale;
  let homeAddress     = props.address.home;
  let mailingAddress  = props.address.mailing;

  homeAddress = <div><p>{homeAddress.street_1}</p>
                    <p>{homeAddress.street_2}</p>
                    <p>{homeAddress.city}, {homeAddress.state} {homeAddress.zip}</p></div>

  mailingAddress = <div><p>{mailingAddress.street_1}</p>
                       <p>{mailingAddress.street_2}</p>
                       <p>{mailingAddress.city}, {mailingAddress.state} {mailingAddress.zip}</p></div>

  return (
    <PageSummaryLink
      summary = {props.summary}
      name    = {props.editKey}
    >
      <SummaryItem
        title={translations[locale].summaryPage.myBasics.homeAddress}
        text={homeAddress}
      />
      <SummaryItem
        title={translations[locale].summaryPage.myBasics.mailingAddress}
        text={mailingAddress}
      />
    </PageSummaryLink>
  );
};

export default Address;
