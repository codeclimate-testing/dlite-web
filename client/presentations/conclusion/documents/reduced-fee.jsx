'use strict';

import React                  from 'react';
import { choosingReducedFee } from '../../../helpers/data/reduced-fee';

const ReducedFee = (props) => {
  if (!choosingReducedFee(props)) {return null;}

  return (
    <div key='reduced-fee translation-missing'>
      <h4 className="reduced-fee">Reduced fee eligibility</h4>
      <p>Finally, we’ll need the Reduced Fee Eligibility form (DL 937). The DMV does not provide these forms. If you get assistance through the government or a nonprofit, speak with them about getting a form. </p>
      <h4 className='no-fee'>No fee eligibility</h4>
      <p>Finally, we’ll need the Reduced Fee Eligibility form (DL 933). The DMV does not provide these forms. If you get assistance through the government or a nonprofit, speak with them about getting a form.</p>
    </div>
  );
};

export default ReducedFee;
