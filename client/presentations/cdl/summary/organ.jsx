'use strict';

import React                from 'react';
import Accordion            from '../../../containers/accordion.jsx';
import CDLOrganDonation     from './organ-donation.jsx';

const Organ = (props) => {
  let cdl       = props.cdl;
  return (
    <Accordion id='organ-donation-summary' title='Organ Donation' >
      <CDLOrganDonation
        organDonation     = { cdl.organDonation }
        title             = 'summaryPage.organDonation.title'
      />
    </Accordion>
  )
};

export default Organ;
