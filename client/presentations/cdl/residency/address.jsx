'use strict';
import React                    from 'react';
import HomeAddress              from '../../my-basics/address/home-address-form.jsx';
import MailingSameAsHome        from '../../my-basics/address/mailing-same-as-home.jsx';
import MailingAddress           from '../../my-basics/address/mailing-address-form.jsx';
import { needsAddress }         from '../../../helpers/data/cdl';
import translations             from '../../../i18n';
import Translator               from '../../../i18n/translator-tag.jsx';

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
        <Translator
          tag             = 'p'
          translationPath = 'cdl.addressPage.doYouGetMailingHereExplanation'
        />
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
