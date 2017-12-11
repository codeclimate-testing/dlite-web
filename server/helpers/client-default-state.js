const state  = {
                        application: {
                          id: '',
                          legalName: {
                            firstName: '',
                            middleName: '',
                            lastName: '',
                            suffix: ''
                          },
                          cardType: {
                            ID: false,
                            DL: false
                          },
                          reducedFee: {
                            ID: '',
                            form: 'No'
                          },
                          homeAddress: {
                            street_1: '',
                            street_2: '',
                            city: '',
                            state: 'CA',
                            zip: ''
                          },
                          mailingAddress: {
                            street_1: '',
                            street_2: '',
                            city: '',
                            state: 'CA',
                            zip: ''
                          },
                          dateOfBirth: {
                            month: '',
                            day: '',
                            year: ''
                          },
                          realID: {
                            getRealID: '',
                            realIdDesignation: ''
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
                          organDonation: {
                            donate: '',
                            contribute: ''
                          },
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
                          socialSecurity: {
                            part1: '',
                            part2: '',
                            part3: '',
                            hasSocialSecurity: ''
                          },
                          veteransService: {
                            isVeteran: '',
                            receiveBenefits: '',
                            veteransIdentifier: ''
                          },
                          citizenStatus: '',
                          ballotByMail: '',
                          eligibilityRequirements: '',
                          politicalPartyChoose: {
                            isSelected: '',
                            politicalPartyChoose: ''
                          },
                          ballotLanguage: '',
                          optOut: '',
                          contactMethods: {
                            shouldContact: '',
                            emailAddress: '',
                            phoneNumber: ''
                          }
                        }
                      };

module.exports = state;
