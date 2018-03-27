'use strict';

import React            from 'react';
import PageSummaryLink  from '../../../containers/page-summary-link.jsx';
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

  return (
    <PageSummaryLink
      {...props}
    >
      <Yes  {...props} showIf={ yesClassM(props) }/>
      <No   {...props} showIf={ noClassM(props) }/>
    </PageSummaryLink>
  )
};

export default Motorcycle;