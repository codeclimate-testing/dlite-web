'use strict';

import React            from 'react';
import PageSummaryLink  from '../../conclusion/summary/Page-summary-link.jsx';
import { hasValue }     from '../../../helpers/data/validations';
import {
  yesClassM,
  noClassM
} from '../../../helpers/data/cdl';
import {
  Yes,
  No
} from '../../conclusion/summary/yes-no.jsx';

const Motorcycle = (props) => {
  if(!hasValue(props.classM)) { return null; }
  let locale = props.locale;

  return (
    <PageSummaryLink
      name    = 'motorcycle'
      summary = 'cdlSummary'
    >
      <Yes  {...props} showIf={ yesClassM(props) }/>
      <No   {...props} showIf={ noClassM(props) }/>
    </PageSummaryLink>
  )
};

export default Motorcycle;