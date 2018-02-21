'use strict';

import React            from "react";
import { hasValue }     from '../../../helpers/data/validations';
import PageSummaryLink  from '../../page-summary-link.jsx';
import SummaryItem      from './summary-item.jsx';
import translations   from '../../../i18n';
import {
  IDAppExists
} from '../../../helpers/data/card-type';
import {
  gettingRealID
} from '../../../helpers/data/real-id';

const Yes = (props) => {
  if (!gettingRealID(props)) { return null; }
  return (
    <SummaryItem
      title='Real-ID Compliant'
      text={translations.shared.commonAnswers.yes}
    />
  )
};

const No = (props) => {
  if (gettingRealID(props)) { return null; }
  return (
    <SummaryItem
      title='Real-ID Compliant'
      text={translations.shared.commonAnswers.no}
    />
  )
};

const IDRealID = (props) => {
  if(!IDAppExists(props)) { return null; }

  return (
    <PageSummaryLink
      name='realID'
    >
      <Yes realID = {props.realID} />
      <No realID = {props.realID} />
    </PageSummaryLink>
  )
};

export default IDRealID;
