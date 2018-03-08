'use strict';

import React                from 'react';
import Accordion            from '../../../containers/accordion.jsx';
import CDLOrganDonation     from './organ-donation.jsx';

const Organ = (props) => {
  let cdl       = props.cdl;
  let locale    = props.ui.locale;
  return (
    <Accordion id='organ-donation-summary' title='Organ Donation' >
      <CDLOrganDonation
        organDonation     = { cdl.organDonation }
        locale            = { locale }
        title             = 'Organ Donation'
      />
    </Accordion>
  )
};

export default Organ;
