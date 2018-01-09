'use strict';

import React            from "react";
import * as dataPresent from '../../helpers/data-present';
import { printDate }    from '../../helpers/print-date';
import PageSummaryLink  from '../page-summary-link.jsx';
import SummaryItem      from './summary-item.jsx';

const Address = (props) => {
  if (!dataPresent.address(props.homeAddress)) { return null; }

  let homeAddress = <div><p>{props.homeAddress.street_1}</p>
                    <p>{props.homeAddress.street_2}</p>
                    <p>{props.homeAddress.city}, {props.homeAddress.state} {props.homeAddress.zip}</p></div>

  let mailingAddress = <div><p>{props.mailingAddress.street_1}</p>
                       <p>{props.mailingAddress.street_2}</p>
                       <p>{props.mailingAddress.city}, {props.mailingAddress.state} {props.mailingAddress.zip}</p></div>

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
