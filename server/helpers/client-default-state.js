const state  = {
  application: {
    id: '',
    cardAction: '',
    cardType: [],
    realID: {
      getRealID: '',
      realIdDesignation: ''
    },
    IDApp: {
      isApplying: false,
      action: '',
      reducedFee: {
        ID: '',
        form: ''
      },
      seniorID: '',
      currentCard: {
        number: '',
        day: '',
        month: '',
        year: ''
      },
      replacementDetails: {
        reason: ''
      },
      cardChanges: {
        correctOrUpdate: '',
        sections: [],
        other: ''
      }
    },
    DLApp: {
      isApplying: false,
      action: '',
      licenseType: {
        type: [],
        endorsement: [],
        needEndorsement: ''
      },
      currentCard: {
        number: '',
        day: '',
        month: '',
        year: ''
      },
      replacementDetails: {
        reason: ''
      },
      cardChanges: {
        correctOrUpdate: '',
        sections: [],
        other: ''
      }
    },
    youthIDInstead: '',
    basics: {
      language: {
        ballotLanguage: '',
        appLanguage: ''
      },
      legalName: {
        firstName: '',
        middleName: '',
        lastName: '',
        suffix: ''
      },
      address: {
        homeAddressSameAsMailing: '',
        home: {
          street_1: '',
          street_2: '',
          city: '',
          state: 'CA',
          zip: ''
        },
        mailing: {
          street_1: '',
          street_2: '',
          city: '',
          state: 'CA',
          zip: '',
        }
      },
      dateOfBirth: {
        month: '',
        day: '',
        year: ''
      },
      physicalTraits: {
        sex: '',
        eyeColor: '',
        hairColor: ''
      },
      traitsHeightWeight: {
        weight: '',
        heightFeet: '',
        heightInches: ''
      },
      socialSecurity: {
        part1: '',
        part2: '',
        part3: '',
        hasSocialSecurity: ''
      }
    },
    history: {
      licenseAndIdHistory: {
        DLIDNumber: '',
        issuedBy: '',
        month: '',
        day: '',
        year: '',
        isIssued: ''
      },
      namesHistory: {
        hasUsedPreviousNames: '',
        previousNames: ''
      },
      medicalHistory: {
        hasMedicalCondition: '',
        medicalInfo: ''
      },
      licenseIssues: {
        isSuspended: '',
        month: '',
        day: '',
        year: '',
        reason: ''
      },
      veteransService: {
        isVeteran: '',
        receiveBenefits: '',
        previouslyDesignated: '',
        veteransIdentifier: ''
      }
    },
    organDonation: {
      donateOrgan: '',
      donateMoney: ''
    },
    voting: {
      citizenStatus: '',
      ballotByMail: '',
      eligibilityRequirements: '',
      politicalPartyChoose: {
        isSelected: '',
        politicalPartyChoose: '',
        otherParty: ''
      },
      optOut: '',
      contactMethods: {
        shouldContact: '',
        emailAddress: '',
        phoneNumber1: '',
        phoneNumber2: '',
        phoneNumber3: ''
      }
    },
    guardianSignature: {
      isSigned:  '',
      guardianInfo: [{
        id: 'first',
        acceptLiabilities: '',
        signature: '',
        signatureDateMonth: '',
        signatureDateDay: '',
        signatureDateYear: '',
        phoneNumber: '',
        street_1: '',
        street_2: '',
        city: '',
        state: 'CA',
        zip: '',
        IDNumber: '',
        IDIssuedBy: '',
        IDExpirationDateMonth: '',
        IDExpirationDateDay: '',
        IDExpirationDateYear: ''
      },
      {
        id: 'second',
        acceptLiabilities: '',
        signature: '',
        signatureDateMonth: '',
        signatureDateDay: '',
        signatureDateYear: '',
        phoneNumber: '',
        street_1: '',
        street_2: '',
        city: '',
        state: 'CA',
        zip: '',
        IDNumber: '',
        IDIssuedBy: '',
        IDExpirationDateMonth: '',
        IDExpirationDateDay: '',
        IDExpirationDateYear: ''
      }]
    }
  }
};

module.exports = state;
