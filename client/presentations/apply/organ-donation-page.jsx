'use strict';

import React                from 'react';
import NavigationButtons    from '../navigation-buttons.jsx';
import Page                 from '../../containers/page.jsx';

import DonateOrgan          from './organ-donation/donate-organ-form.jsx';
import DonateMoney          from './organ-donation/donate-money-form.jsx';

const OrganDonationPage = (props) => {
  return (
    <Page
      {...props}
      sectionKey='organDonation'
    >
      <form onSubmit    = { props.onSubmit }>
        <DonateOrgan
          {...props}
          onChange      = { props.onChange }
          selectedValue = { props.organDonation.donateOrgan }
        />

        <DonateMoney
          {...props}
          onChange      = { props.onChange }
          selectedValue = { props.organDonation.donateMoney }
        />

        <NavigationButtons {...props} />
      </form>
    </Page>
  )
};

export default OrganDonationPage;