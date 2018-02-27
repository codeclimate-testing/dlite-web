'use strict';
import React                    from 'react';
import HomeAddress              from '../../my-basics/address/home-address-form.jsx';
import MailingSameAsHome        from '../../my-basics/address/mailing-same-as-home.jsx';
import MailingAddress           from '../../my-basics/address/mailing-address-form.jsx';
import { needsAddress }         from '../../../helpers/data/cdl';

const AddressForm = (props) => {
  if (!needsAddress(props.residency)) { return null; }
  return (
    <div>
      <HomeAddress
        {...props}
        address         = { props.residency.home }
      />
      <MailingSameAsHome
        {...props}
        selectedValue   = { props.residency.homeAddressSameAsMailing }
      >
        <p className='translation-missing'>The DMV will print your mailing address on your CDL. The CDL will also be sent to your mailing address.</p>
      </MailingSameAsHome>
      <MailingAddress
        {...props}
        isSameAsHome    = { props.residency.homeAddressSameAsMailing }
        address         = { props.residency.mailing }
      />
    </div>
  );
};

export default AddressForm;
