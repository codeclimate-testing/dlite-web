'use strict';

import React              from "react";
import PageSummaryLink    from '../../../containers/page-summary-link.jsx';

import { Yes, No }        from './yes-no.jsx';
import { gettingRealID }  from '../../../helpers/data/real-id';



const RealID = (props) => {
  if (!props.showIf) { return null; }
  return (
    <PageSummaryLink {...props} >
      <Yes  {...props} showIf={gettingRealID(props)}/>
      <No   {...props} showIf={!gettingRealID(props)}/>
    </PageSummaryLink>
  )
};

export default RealID;