'use strict';

const defaultClientState    = require('./client-default-state');
const get                   = require('./server-to-client-parsers/index');


function parse(data) {
  if(!data) {
    return defaultClientState;
  }
  let application           = data.application;
  let addresses             = data.addresses;
  let emails                = data.emails;
  let phone_numbers         = data.phone_numbers;
  let organ_donations       = data.organ_donations;
  let card_histories        = data.card_histories;
  let previous_names        = data.previous_names;
  let medical_histories     = data.medical_histories;
  let license_issues        = data.license_issues;
  let veterans_info         = data.veterans_info;
  let voting_registrations  = data.voting_registrations;
  let cards                 = data.cards;
  let card_options          = data.card_options;
  let license_classes       = data.license_classes;

  return Object.assign(
    {},
    {
      application: {
        id:                       application.id,
        basics: {
          language:                 get.language(application, voting_registrations),
          legalName:                get.legalName(application),
          dateOfBirth:              get.dateOfBirth(application),
          address:                  get.address(addresses),
          physicalTraits:           get.physicalTraits(application),
          traitsHeightWeight:       get.heightAndWeight(application),
          socialSecurity:           get.socialSecurity(application)
        },
        IDApp:                      get.IDApp(cards, card_options, card_histories),
        DLApp:                      get.DLApp(cards, card_options, card_histories, license_classes),

        cardType:                   [],
        cardAction:                 '',
        youthIDInstead:             '',
        realID:                     get.realID(card_options, cards),
        organDonation:              get.organDonations(organ_donations),

        history: {
          licenseAndIdHistory:      get.licenseAndIdHistory(card_histories),
          namesHistory:             get.namesHistories(previous_names),
          medicalHistory:           get.medicalHistories(medical_histories),
          licenseIssues:            get.licenseIssues(license_issues),
          veteransService:          get.veteransService(veterans_info)
        },

        voting: {
          citizenStatus:            get.citizenStatus(voting_registrations),
          ballotByMail:             get.ballotByMail(voting_registrations),
          eligibilityRequirements:  get.eligibility(voting_registrations),
          politicalPartyChoose:     get.party(voting_registrations),
          optOut:                   get.optedOut(voting_registrations),
          contactMethods:           get.contactMethods(emails, phone_numbers, voting_registrations)
        }
      }
    }
  );
}


module.exports = parse;
