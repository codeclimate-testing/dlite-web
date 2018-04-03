'use strict';

import React              from 'react';
import { hasValue }       from '../../../helpers/data/validations';
import { getClassText }   from '../../../helpers/data/cdl';
import PageSummaryLink    from '../../../containers/page-summary-link.jsx';
import SummaryItem        from '../../conclusion/summary/summary-item.jsx';

const LicenseClass  = (props) => {
  if(!hasValue(props.licenseClass)) { return null; }

  let classTextKey = getClassText(props.licenseClass);

  return (
    <PageSummaryLink
      {...props}
    >
      <SummaryItem
        title = 'newExtracted.conclusion.summary.licenseClass'
        text  = { classTextKey }
      />
    </PageSummaryLink>
  )
};

export default LicenseClass;
