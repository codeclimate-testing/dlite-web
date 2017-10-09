'use strict';

import React                        from 'react';


import alicePath                    from '../../helpers/alice-path';
import { updateMailingAddress }     from "../../actions/index";
import Form                         from "../../presentations/motor/interstitial-address-form.jsx";
import connectForm                  from '../../helpers/connect-form-interstitial';
import navigateOnSubmit             from '../../helpers/navigate-on-submit';
import * as dataPresent             from '../../helpers/data-present';

const ConnectedForm = (props) => {

  let onSubmit = (event) => {
    let address = '';
    if(event.target.value === 'Yes'){
      //Copy home address to mailing address
      props.onCopy(props.homeAddress);

      address = '/about-me/sex/';
    }
    else{
      //Reset mailing address
      props.onReset(props.homeAddress);

      address = '/about-me/mailing-address/';
    }

    props.history.push(
      alicePath(address)
    );
  };

  return (
    <Form
      onChange={onSubmit}
    />
  );
};

function mapStateToProps(state) {
  return {
    homeAddress: state.application.homeAddress
  };
}

export default connectForm(mapStateToProps, updateMailingAddress, ConnectedForm);
