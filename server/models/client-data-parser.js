'use strict';

function parse(data) {
  return Object.assign(
    {},
    { application:            extractApplication(data) },
    { addresses:              extractAddresses(data) },
    { emails:                 extractEmail(data) },
    { phone_numbers:          extractPhoneNumber(data) },
    { organ_donations:        extractOrganDonation(data) },
    { card_histories:         extractCardHistories(data) },
    { previous_names:         extractPreviousNames(data) },
    { medical_histories:      extractMedicalHistories(data) },
    { license_issues:         extractLicenseIssues(data) },
    { veterans_info:          extractVeteransInfo(data) },
    { voting_registrations:   extractVotingRegistrations(data) }
  );
}

function extractApplication(data) {
  let legalName         = data.legalName || {};
  let heightWeight      = data.traitsHeightWeight || {};
  let physicalTraits    = data.physicalTraits || {};
  let dob               = null;
  let socialSecurity    = null;


  if(data.dateOfBirth.month && data.dateOfBirth.day && data.dateOfBirth.year){
    dob = new Date(data.dateOfBirth.month + '/' + data.dateOfBirth.day + '/' + data.dateOfBirth.year)
  }

  if(data.socialSecurity && data.socialSecurity.hasSocialSecurity === 'Yes'){
    let _socialSecurity = data.socialSecurity;
    socialSecurity = _socialSecurity.part1+'-'+_socialSecurity.part2+'-'+_socialSecurity.part3;
  }

  return {
    id:                       data.id,
    first_name:               legalName.firstName,
    middle_name:              legalName.middleName,
    last_name:                legalName.lastName,
    suffix_name:              legalName.suffix,
    date_of_birth:            dob,
    hair_color:               physicalTraits.hairColor,
    eye_color:                physicalTraits.eyeColor,
    height_feet:              heightWeight.heightFeet,
    height_inches:            heightWeight.heightInches,
    weight:                   heightWeight.weight,
    sex:                      physicalTraits.sex,
    social_security_number:   socialSecurity
  };
}

function extractAddresses(data) {
  return [
    {
      application_id:     data.id,
      type:               'mailing',
      street_address_1:   data.mailingAddress.street_1,
      street_address_2:   data.mailingAddress.street_2,
      city:               data.mailingAddress.city,
      state:              data.mailingAddress.state,
      zip:                data.mailingAddress.zip
    },
    {
      application_id:     data.id,
      type:               'home',
      street_address_1:   data.homeAddress.street_1,
      street_address_2:   data.homeAddress.street_2,
      city:               data.homeAddress.city,
      state:              data.homeAddress.state,
      zip:                data.homeAddress.zip
    }
  ];
}

function extractEmail(data) {
  return [{
    application_id:   data.id,
    address:          data.contactMethods.emailAddress
  }];
}

function extractPhoneNumber(data) {
  return [{
    application_id:   data.id,
    number:           data.contactMethods.phoneNumber
  }];
}

function extractOrganDonation(data) {
  return [{
    application_id:   data.id,
    donating_organs:  getBooleanValue(data.organDonation.donate),
    donating_money:   getBooleanValue(data.organDonation.contribute)
  }];
}

function extractCardHistories(data) {
  if(data.licenseAndIdHistory.isIssued === 'Yes'){
    let _date = data.licenseAndIdHistory.month + '/'
                + data.licenseAndIdHistory.day + '/'
                  + data.licenseAndIdHistory.year
    return [{
      application_id:   data.id,
      number:           data.licenseAndIdHistory.DLIDNumber,
      issuing_entity:   data.licenseAndIdHistory.issuedBy,
      date_description: _date,
    }];
  }
  else {
    return null;
  }

}

function extractPreviousNames(data) {
  let _previousNames  = data.namesHistory;
  let _names          = [];
  if( _previousNames.hasUsedPreviousNames === 'Yes') {
    let tokens = _previousNames.previousNames.split(',');
    tokens.forEach(function (token){
      if(token.trim()){
        _names.push(
          {
            application_id:   data.id,
            name:             token
          }
        );
      }
    });
    return _names;
  }
  else {
    return null;
  }
}

function extractMedicalHistories(data) {
  if(data.medicalHistory.hasMedicalCondition === 'Yes') {
    return [{
      application_id:   data.id,
      description:      data.medicalHistory.medicalInfo
    }];
  }
  else {
    return null;
  }
}

function extractLicenseIssues(data) {
  if( data.licenseIssues.isSuspended === 'Yes'){
    let _date = data.licenseIssues.month + '/'
                + data.licenseIssues.day + '/'
                  + data.licenseIssues.year
    return [{
      application_id:     data.id,
      description:        data.licenseIssues.reason,
      date_description:   _date
    }];
  }
  else{
    return null;
  }
}

function extractVeteransInfo(data) {
  if(data.veteransService.isVeteran === 'Yes'){
    let label = null;
    if(data.veteransService.veteransIdentifier === 'Yes'){
      label = 'add';
    }
    return [{
      application_id:               data.id,
      has_requested_information:    getBooleanValue(data.veteransService.receiveBenefits),
      labeling:                     label
    }];
  }
  else {
    return null;
  }

}

function extractVotingRegistrations(data) {

  let _opted_out, _type;
  if( data.optOut === 'I am a new voter in California'){
    _opted_out  = 'No';
    _type       = 'new';
  }
  if( data.optOut === 'I am already registered to vote in California'){
    _opted_out  = 'No';
    _type       = 'existing';
  }
  if( data.optOut === 'I am eligible to vote, but do not want to register to vote'){
    _opted_out  = 'Yes';
    _type       = 'existing';
  }

  return [{
    application_id:     data.id,
    is_citizen:         getBooleanValue(data.citizenStatus),
    is_eligible:        getBooleanValue(data.eligibilityRequirements),
    type:               _type,
    opted_out:          getBooleanValue(_opted_out),
    is_preregistering:  getBooleanValue(data.politicalPartyChoose.isSelected),
    party:              data.politicalPartyChoose.politicalPartyChoose,
    language:           data.ballotLanguage,
    vote_by_mail:       getBooleanValue(data.ballotByMail),
    should_contact:     getBooleanValue(data.contactMethods.shouldContact)
  }];
}


function getBooleanValue(val) {
  return val === 'Yes' ? true : false;
}

module.exports = parse;
