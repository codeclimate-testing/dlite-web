'use strict';

const value = (props) => {
  return !!(props && props.trim());
};

const legalName = (props) => {
  return props && value(props.lastName);
};

const date = (props) => {
  return props && (
    value(props.month) && value(props.day) && value(props.year)
  );
};

const address = (props) => {
  return props && (
    value(props.street_1) || value(address.street_2) || value(props.city) || value(props.zip)
  );
};

const height = (props) => {
  return props && value(props.feet);
}

const socialSecurity = (props) => {
  return props && (
    value(props.part1) && value(props.part2) && value(props.part3)
  );
}

const contactDetails = (props) => {
  return props && (
    value(props.emailAddress) || value(props.phoneNumber)
  );
}

const application = (props) => {
  return legalName(props.legalName) ||
    date(props.dateOfBirth) ||
    address(props.homeAddress) ||
    address(props.mailingAddress) ||
    value(props.sex) ||
    (props.eyeColor && value(props.eyeColor.eyeColor)) ||
    (props.hairColor && value(props.hairColor.hairColor)) ||
    height(props.height) ||
    value(props.weight) ||
    value(props.organ) ||
    socialSecurity(props.socialSecurity) ||
    value(props.citizenStatus) ||
    value(props.contactMethods) ||
    value(props.ballotByMail) ||
    value(props.eligibilityRequirements) ||
    value(props.politicalPartyChoose) ||
    contactDetails(props.contactDetails) ||
    value(props.ballotLanguage);
};

export {
  value,
  legalName,
  address,
  date,
  height,
  socialSecurity,
  contactDetails,
  application
};
