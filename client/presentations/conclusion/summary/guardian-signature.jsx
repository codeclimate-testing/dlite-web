'use strict';

import React                from 'react';
import { hasValue }         from '../../../helpers/data/validations';
import Accordion            from '../../../containers/accordion.jsx';
import Translator           from '../../../i18n/translator-tag.jsx';
import SummaryItem          from './summary-item.jsx';
import PageSummaryLink      from '../../../containers/page-summary-link.jsx';
import {
  guardianNotSigned,
  secondGuardian
} from '../../../helpers/data/youth';

const getChoiceMade = (isSigned) => {
  switch(isSigned) {
    case 'signElectronically':
      return 'Parent/guardian(s) signed electronically'

    case 'signAtDMV':
      return 'Parent/guardian(s) will sign at the DMV'

    case 'emancipatedMinor':
      return 'You are an emancipated minor'

    default:
      return '';
  }
}

const getAddressFormat = (address) => {
  return (
    <div>
      <p>{address.street_1}</p>
      <p>{address.street_2}</p>
      <p>{address.city}, {address.state} {address.zip}</p>
    </div>
  );
}

const getDateFormat = (month, day, year) => {
  return(
    <div>
      {month} / {day} / {year}
    </div>
  )
}
const GuardianDetails = (guardianInfo) => {
  let props = guardianInfo.props;
  if(!props.acceptLiabilities) { return null; }

  return(
    <div>
      <SummaryItem
        className = 'follower'
        title     = 'Parent/guardian name'
        text      = { props.signature.name }
      />

      <SummaryItem
        className = 'follower'
        title     = 'Accept civil liability'
        text      = { props.acceptLiabilities ? 'Yes' : 'No' }
      />

      <SummaryItem
        className = 'follower'
        title     = 'Signature date'
        text      = { getDateFormat(props.signature.month, props.signature.day, props.signature.year) }
      />

      <SummaryItem
        className = 'follower'
        title     = 'Phone number'
        text      = { props.phoneNumber }
      />

      <SummaryItem
        className = 'follower'
        title     = 'Address'
        text      = { getAddressFormat(props.address) }
      />
    </div>
  );
}

const GuardianSignature = (props) => {

  let application = props.application;
  let isSigned    = application.guardianSignature.isSigned;

  if (!hasValue(isSigned)) { return null; }

  return (
    <Accordion
      id    = 'guardian-signature-summary'
      title = 'Parent/guardian Signature'
      key   = 'guardian-signature-summary'
    >
    <PageSummaryLink editKey = 'guardianSignature'>
      <SummaryItem
        title     = 'You selected'
        text      = { getChoiceMade(isSigned) }
      />

      <GuardianDetails
        props = { application.guardianSignature.guardianInfo[0] }
      />

      <GuardianDetails
        props = { application.guardianSignature.guardianInfo[1] }
      />
    </PageSummaryLink>

    </Accordion>
  );
};

export default GuardianSignature;