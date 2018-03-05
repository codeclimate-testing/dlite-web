'use strict';

import React              from 'react';
import { hasValue }       from '../../../helpers/data/validations';
import { getClassText }   from '../../../helpers/data/cdl';
import PageSummaryLink    from '../../conclusion/summary/Page-summary-link.jsx';
import SummaryItem        from '../../conclusion/summary/summary-item.jsx';

const LicenseClass  = (props) => {
  if(!hasValue(props.licenseClass)) { return null; }

  let classText = getClassText(props.licenseClass, props.locale);

  return (
    <PageSummaryLink
      name    = 'cdlClass'
      summary = 'cdlSummary'
    >
      <SummaryItem
        title = 'License class:'
        text  = { classText }
      />
    </PageSummaryLink>
  )
};

export default LicenseClass;