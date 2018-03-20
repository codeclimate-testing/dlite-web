const IDDL  = {
  application: {
    id: '',
    cardAction: '',
    cardType: [],
    realID: '',
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
      cardReplacement: {
        reason: ''
      },
      cardChanges: {
        correctOrUpdate: '',
        sections: [],
        other: ''
      },
      realID: ''
    },
    DLApp: {
      isApplying: false,
      action: '',
      licenseType: {
        type: [],
        needEndorsement: ''
      },
      currentCard: {
        number: '',
        day: '',
        month: '',
        year: ''
      },
      cardReplacement: {
        reason: ''
      },
      cardChanges: {
        correctOrUpdate: '',
        sections: [],
        other: ''
      },
      realID: ''
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

const CDL = {
  cardAction: '',
  cardChanges: {
    correctOrUpdate: '',
    sections: [],
    other: ''
  },
  cardReplacement: {
    reason: ''
  },
  realID: '',
  cdlEndorsements: {
    type: [],
    needEndorsement: ''
  },
  cdlCertificates: {
    type: [],
    needCertificates: ''
  },
  'organDonation': {
    'donateOrgan': '',
    'donateMoney': ''
  },
  basics: {
    'language':  {
      'appLanguage': '',
      'ballotLanguage': '',
      'hasChosenBallot': ''
    },
    'legalName': {
      'firstName': '',
      'middleName': '',
      'lastName': '',
      'suffix': ''
    },
    'dateOfBirth': {
      'day': '',
      'month': '',
      'year': ''
    },
    'address': {
      'homeAddressSameAsMailing': '',
      'home': {
        'street_1': '',
        'street_2': '',
        'city': '',
        'state': '',
        'zip': ''
      },
      'mailing': {
        'street_1': '',
        'street_2': '',
        'city': '',
        'state': '',
        'zip': ''
      }
    },
    'physicalTraits': {
      'hairColor': '',
      'eyeColor': '',
      'sex': ''
    },
    'traitsHeightWeight': {
      'weight': '',
      'heightFeet': '',
      'heightInches': ''
    },
    'socialSecurity': {
      'part1': '',
      'part2': '',
      'part3': '',
      'hasSocialSecurity': ''
    }
  },
  'history': {
    'currentDLInfo': {
      'number': '',
      'issuedBy': '',
      'month': '',
      'day': '',
      'year': '',
      'isIssued': ''
    },
    'namesHistory': {
      'hasUsedPreviousNames': '',
      'previousNames': ''
    },
    'medicalHistory': {
      'hasMedicalCondition': '',
      'medicalInfo': ''
    },
    'licenseIssues': {
      'isSuspended': '',
      'month': '',
      'day': '',
      'year': '',
      'reason': ''
    },
    'veteransService': {
      'isVeteran': '',
      'receiveBenefits': '',
      'previouslyDesignated': '',
      'veteransIdentifier': '',
      'militaryWaiver': ''
    },
    'otherStateLicenses': {
      'hasNonCALicense': '',
      'tenYearHistory': ''
    }
  },

  'voting': {
    'citizenStatus': '',
    'ballotByMail': '',
    'ballotLanguage': '',
    'eligibilityRequirements': '',
    'politicalPartyChoose': {
      'isSelected': '',
      'politicalPartyChoose': '',
      'otherParty': ''
    },
    'optOut': '',
    'contactMethods': {
      'shouldContact': '',
      'emailAddress': '',
      'phoneNumber1': '',
      'phoneNumber2': '',
      'phoneNumber3': ''
    }
  },
  'currentCardInfo': {
    'number': '',
    'year': '',
    'day': '',
    'month': ''
  },
  'classM': '',
  'licenseClass': '',
  'certification': ''
};


module.exports = {
  IDDL,
  CDL
};
