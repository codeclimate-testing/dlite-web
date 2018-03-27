'use strict';
import React                    from 'react';
import HomeAddress              from '../../my-basics/address/home-address-form.jsx';
import MailingSameAsHome        from '../../my-basics/address/mailing-same-as-home.jsx';
import MailingAddress           from '../../my-basics/address/mailing-address-form.jsx';
import { needsAddress }         from '../../../helpers/data/cdl';
import Translator               from '../../../i18n/translator-tag.jsx';

const AddressForm = (props) => {
  if (!needsAddress(props.address)) { return null; }
  return (
    <div>
      <HomeAddress
        {...props}
        address         = { props.address.home }
      />
      <MailingSameAsHome
        {...props}
        selectedValue   = { props.address.homeAddressSameAsMailing }
      >
        <Translator
          tag             = 'p'
          translationPath = 'cdl.addressPage.doYouGetMailingHereExplanation'
        />
      </MailingSameAsHome>
      <MailingAddress
        {...props}
        isSameAsHome    = { props.address.homeAddressSameAsMailing }
        address         = { props.address.mailing }
      />
    </div>
  );
};

export default AddressForm;
