'use strict';

import React                from 'react';

import radioYesNoGroup      from '../../radio-yes-no-group.jsx';
import RadioCollection      from '../../radio-selector-collection.jsx';
import MessageBox           from '../../message-box.jsx';
import { showBenefitsPage } from '../../../helpers/data/veteran';

const VeteransBenefits = (props) => {

  if(showBenefitsPage(props)) {
    return (
      <div className='veterans-benefits-form'>
        <MessageBox className='thanks'>
          <div className='veteran-thank-you-message'>
            <p className='question'>Thank you for your service.</p>
          </div>
        </MessageBox>

        <hr/>

        <h2 className='question'>Would you like to receive benefits information for which you may be eligible?</h2>

        <div className='input-container'>
          <RadioCollection
            {...props}
            name='receiveBenefits'
          >
            { radioYesNoGroup() }
          </RadioCollection>
        </div>
      </div>
    );
  }
  return null;
};

export default VeteransBenefits;
