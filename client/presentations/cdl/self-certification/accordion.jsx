'use strict';

import React              from 'react';
import Accordion          from '../../accordion.jsx';

const CertAccordion = (props) => {
  return (
    <Accordion
      id='cdl-self-certification'
      title = "I'm not sure which applies to me"
    >
      <h4>Interstate commerce</h4>
      <p>Means trade, traffic, or transportation in the U.S. that is:</p>
      <ul className='bullet-list'>
        <li>Between a place in a State and a place outside of such State  (including a place outside of the U.S.).</li>
        <li>Between two places in the State through another State or a place outside of the U.S. </li>
        <li>Between two places in the State as part of trade, traffic, or transportation originating or terminating outside the State or the U.S.</li>
      </ul>

      <h4>Intrastate commerce</h4>
      <p>Means trade, traffic, or transportation in any State which is not described in the term "interstate commerce."</p>
    </Accordion>
  )
};

export default CertAccordion;