'use strict';

export default (dispatch) =>  {
  return (editKey) => {
    if (editKey === 'cdlLegalName'){
      // clear cdl
      dispatch({
        type: 'GET_DATA_SUCCESS',
        payload: {
          data: defaultCDLData,
          error: null
        }
      });
    }
    else if(editKey === 'legalName') {
      // clear id-dl
      dispatch({
        type: 'GET_DATA_SUCCESS',
        payload: {
          data: defaultIDDLData,
          error: null
        }
      });
    }
  }
};

const defaultCDLData = {
  cdl: {
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
      'language':  '',
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
  }
};

const defaultIDDLData = {
  application: {
    basics: {
      'language': '',
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
    IDApp: {
      isApplying: false,
      action: '',
      'reducedFee': {
        'ID': '',
        'form': ''
      },
      'seniorID': '',
      'cardChanges': {
        'correctOrUpdate': '',
        'sections': [],
        'other': ''
      },
      'cardReplacement': {
        'reason': ''
      },
      'currentCard': {
        number: '',
        day: '',
        month: '',
        year: ''
      },
      realID: ''
    },

    DLApp: {
      isApplying: false,
      action: '',
      'cardChanges': {
        'correctOrUpdate': '',
        'sections': [],
        'other': ''
      },
      'cardReplacement': {
        'reason': ''
      },
      'currentCard': {
        number: '',
        day: '',
        month: '',
        year: ''
      },
      'licenseType': {
        'type': [],
        'needEndorsement': ''
      },
      realID: ''
    },

    cardType: [],
    cardAction: '',

    youthIDInstead: '',
    'realID': '',
    'organDonation': {
      'donateOrgan': '',
      'donateMoney': ''
    },
    'history': {
      'licenseAndIdHistory': {
        'DLIDNumber': '',
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
        'veteransIdentifier': ''
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
    }
  }
};