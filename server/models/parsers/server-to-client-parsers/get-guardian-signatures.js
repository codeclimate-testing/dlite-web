'use strict';

function guardianSignature(signatures, addresses) {
  let _guardianSignature_ = {
    isSigned: '',
    guardianInfo: [
      {
        id: '0',
        acceptLiabilities: false,
        signature: {
          name:   '',
          month:  '',
          day:    '',
          year:   ''
        },
        phoneNumber: '',
        address: {
          street_1: '',
          street_2: '',
          city:     '',
          state:    '',
          zip:      ''
        }
      },
      {
        id: '1',
        acceptLiabilities: false,
        signature: {
          name:   '',
          month:  '',
          day:    '',
          year:   ''
        },
        phoneNumber: '',
        address: {
          street_1: '',
          street_2: '',
          city:     '',
          state:    '',
          zip:      ''
        }
      }
    ]
  };

  try{
    if(signatures && signatures.length > 0) {

      let guardianFirst   = {};
      let guardianSecond  = {};

      _guardianSignature_.isSigned = 'signElectronically'

      signatures.forEach(signature => {
        addresses.forEach(address => {
          if(signature.guardian_type === 'first' && address.guardian_type === 'first'){
            guardianFirst = Object.assign(signature, address);
          }
          if(signature.guardian_type === 'second' && address.guardian_type === 'second'){
            guardianSecond = Object.assign(signature, address);
          }
        });
      });

      if(guardianFirst.accept_civil_liability){
        _guardianSignature_.guardianInfo[0].acceptLiabilities = guardianFirst.accept_civil_liability,
        _guardianSignature_.guardianInfo[0].signature.name    = guardianFirst.guardian_name;
        _guardianSignature_.guardianInfo[0].signature.month   = (new Date(guardianFirst.signed_on).getMonth() + 1).toString();
        _guardianSignature_.guardianInfo[0].signature.day     = (new Date(guardianFirst.signed_on).getDate()).toString();
        _guardianSignature_.guardianInfo[0].signature.year    = (new Date(guardianFirst.signed_on).getFullYear()).toString();
        _guardianSignature_.guardianInfo[0].phoneNumber       = guardianFirst.phone_number;
        _guardianSignature_.guardianInfo[0].address.street_1  = guardianFirst.street_address_1;
        _guardianSignature_.guardianInfo[0].address.street_2  = guardianFirst.street_address_2;
        _guardianSignature_.guardianInfo[0].address.city      = guardianFirst.city;
        _guardianSignature_.guardianInfo[0].address.state     = guardianFirst.state;
        _guardianSignature_.guardianInfo[0].address.zip       = guardianFirst.zip;
      }

      if(guardianSecond.accept_civil_liability){
        _guardianSignature_.guardianInfo[1].acceptLiabilities = guardianSecond.accept_civil_liability,
        _guardianSignature_.guardianInfo[1].signature.name    = guardianSecond.guardian_name;
        _guardianSignature_.guardianInfo[1].signature.month   = (new Date(guardianSecond.signed_on).getMonth() + 1).toString();
        _guardianSignature_.guardianInfo[1].signature.day     = (new Date(guardianSecond.signed_on).getDate()).toString();
        _guardianSignature_.guardianInfo[1].signature.year    = (new Date(guardianSecond.signed_on).getFullYear()).toString();
        _guardianSignature_.guardianInfo[1].phoneNumber       = guardianSecond.phone_number;
        _guardianSignature_.guardianInfo[1].address.street_1  = guardianSecond.street_address_1;
        _guardianSignature_.guardianInfo[1].address.street_2  = guardianSecond.street_address_2;
        _guardianSignature_.guardianInfo[1].address.city      = guardianSecond.city;
        _guardianSignature_.guardianInfo[1].address.state     = guardianSecond.state;
        _guardianSignature_.guardianInfo[1].address.zip       = guardianSecond.zip;
      }

    }
    return _guardianSignature_;
  }
  catch(err){
    return _guardianSignature_;
  }
}

module.exports = guardianSignature;