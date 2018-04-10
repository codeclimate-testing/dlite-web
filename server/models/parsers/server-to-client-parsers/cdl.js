'use strict';
const get                   = require('./index');

function CDL(data) {
  const cdlApp              = get.CDLApp(data.card_options);
  const cdlType             = get.CDLType(data.license_classes);

  return  Object.assign(
    {},
    {
      cdl                   :  {
        id                          : data.application.id,
        cardAction                  : cdlApp.cardAction,
        cardChanges                 : cdlApp.cardChanges,
        cardReplacement             : cdlApp.cardReplacement,
        realID                      : cdlApp.realID,
        cdlEndorsements             : cdlType.cdlEndorsements,
        cdlCertificates             : cdlType.cdlCertificates,
        currentCardInfo             : get.cardInfo(data.card_histories, cdlApp.cardAction),
        organDonation               : get.organDonations(data.organ_donations),
        basics                      : {
          language                  : get.language(data.application),
          legalName                 : get.legalName(data.application),
          dateOfBirth               : get.dateOfBirth(data.application),
          address                   : get.address(data.addresses),
          physicalTraits            : get.physicalTraits(data.application),
          traitsHeightWeight        : get.heightAndWeight(data.application),
          socialSecurity            : get.socialSecurity(data.application)
        },
        history                     : {
          currentDLInfo             : get.DLInfo(data.card_histories, cdlApp.cardAction),
          namesHistory              : get.namesHistories(data.previous_names),
          medicalHistory            : get.medicalHistories(data.medical_histories),
          licenseIssues             : get.licenseIssues(data.license_issues),
          veteransService           : get.veteransService(data.veterans_info, true)
        },
        voting                      : {
          citizenStatus             : get.citizenStatus(data.voting_registrations),
          ballotLanguage            : get.ballotLanguage(data.voting_registrations),
          ballotByMail              : get.ballotByMail(data.voting_registrations),
          eligibilityRequirements   : get.eligibility(data.voting_registrations),
          politicalPartyChoose      : get.party(data.voting_registrations),
          optOut                    : get.optedOut(data.voting_registrations),
          contactMethods            : get.contactMethods(data.emails, data.phone_numbers, data.voting_registrations)
        },
        classM                      : cdlType.classM,
        licenseClass                : cdlType.licenseClass,
        certification               : cdlType.certification
      }
    }
  );
}

module.exports = CDL;