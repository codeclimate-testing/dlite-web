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
          selectedValue = { props.organDonation.donateOrgan }
          errorMessage  = { props.validations.donateOrgan() }
        />

        <hr />

        <DonateMoney
          {...props}
          selectedValue = { props.organDonation.donateMoney }
          errorMessage  = { props.validations.donateMoney() }
        />

          <NavigationButtons
            {...props}
            errorMessage={ props.validations.all() }
          />
      </form>
    </Page>
  )
};

export default OrganDonationPage;
