'use strict';

import React            from "react";
import * as dataPresent from '../../helpers/data-present';
import { printDate }    from '../../helpers/print-date';
import PageSummaryLink  from '../page-summary-link.jsx';
import SummaryItem      from './summary-item.jsx';

const Address = (props) => {
  if (!dataPresent.address(props.address.home)) { return null; }
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
      to='/my-basics/address'
      name='address'
    >
      <SummaryItem
        title='Home Address'
        text={homeAddress}
      />
      <br></br>
      <SummaryItem
        title='Mailing Address'
        text={mailingAddress}
      />
    </PageSummaryLink>
  );
};

export default Address;
