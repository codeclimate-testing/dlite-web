'use strict';

import React                from 'react';
import Accordion            from '../../../containers/accordion.jsx';


const CDLOrganDonation = (props) => {
  let cdl         = props.cdl;
  return (
    <Accordion id='organ-donation-summary' title='Organ donation' key='organ-donation-summary'>
      <CDLOrganDonation
        organDonation     = ''
        editKey           = 'cdlOrganDonation'
        summary           = 'cdlSummary'
      />
    </Accordion>
  )
};

export default CDLOrganDonation;