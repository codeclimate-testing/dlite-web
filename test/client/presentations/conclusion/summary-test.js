'use strict';

import assert           from 'assert';
import React            from 'react';
import configure        from '../../support/configure-enzyme';
import { render }       from 'enzyme';
import { spy }          from 'sinon';
import store            from '../../support/page-store';
import wrapperGenerator from '../../support/wrapper';
import data             from '../../../../server/helpers/client-default-state.js';
import translations     from '../../../../client/i18n';
import SummaryPage      from '../../../../client/presentations/conclusion/summary-page.jsx';
import {
  DLApplicationNotStarted,
  DLAction,
  CurrentDLInfo,
  DLRealID,
  LicenseType
} from '../../../../client/presentations/conclusion/summary/dl-app/index';
import {
  IDApplicationNotStarted,
  SeniorID,
  IDRealID,
  ReducedOrNoFee,
  IDAction,
  CurrentIDInfo
} from '../../../../client/presentations/conclusion/summary/id-app/index';
import {
  Empty,
  LegalName,
  DateOfBirth,
  Address,
  TraitsHeightWeight,
  PhysicalTraits,
  SocialSecurity
} from '../../../../client/presentations/conclusion/summary/my-basics/index';
import {
  LicenseIssues,
  LicenseAndIdHistory,
  NamesHistory,
  MedicalHistory,
  VeteransService
} from '../../../../client/presentations/conclusion/summary/my-history/index';
import {
  CitizenStatus,
  EligibilityRequirements,
  BallotByMail,
  PoliticalPartyChoose,
  BallotLanguage,
  ContactMethods,
  OptOut
} from '../../../../client/presentations/conclusion/summary/voting/index';

import OrganDonation      from '../../../../client/presentations/conclusion/summary/organ-donation.jsx';
import GuardianSignature  from '../../../../client/presentations/conclusion/summary/guardian-signature.jsx'


describe('SummaryPage', function() {
  const Wrapper = wrapperGenerator(store);
  let props;

  beforeEach(function() {
    props = {
      application: data.application,
      server: '',
      onSubmit: spy()
    };
  });
  it('has 6 accordions', function() {
    let component = render(
      <Wrapper>
        <SummaryPage { ...props } />
      </Wrapper>
    );
    assert.ok(component.find('#id-application-details-summary-accordion').length);
    assert.ok(component.find('#driver-license-application-details-summary-accordion').length);
    assert.ok(component.find('#basics-summary-accordion').length);
    assert.ok(component.find('#history-summary-accordion').length);
    assert.ok(component.find('#organ-donation-summary-accordion').length);
    assert.ok(component.find('#voter-registration-summary-accordion').length);
  });
});

describe('Summary components', function() {
  const Wrapper = wrapperGenerator(store);
  let props;

  beforeEach(function() {
    props = Object.assign({}, data.application);
    props.summary = 'summary';
  });

  describe('DLApp', function() {

    describe('DLAction', function() {
      let component;
      beforeEach(function() {
        props.cardType = ['DL'];
        props.cardAction = 'new';
        props.DLApp.isApplying = true;
        props.DLApp.action = 'new';

        component = render(
          <Wrapper>
            <DLAction
              { ...props }
            />
          </Wrapper>
        );
      });
      it('shows action for DL', function() {
        assert.equal(component.text().includes('Applying for the first time'), true);
      });

      it('shows edit button going to the addWdywtdy page and then back to IDDL summary page', function() {
        assert.ok(component.find('.addWdywtdt[href="/add/driver-license"]'));
      });
    });
    describe('CurrentDLInfo', function() {
      it('shows current card info when user is renewing a card and has provided info of card to renew', function() {
        props.cardType = ['DL'];
        props.cardAction = 'renew';
        props.DLApp = {
          isApplying: true,
          action: 'renew'
        }

        props.currentCardInfo = {
          number: 'a90382kf',
          month: '11',
          day: '13',
          year: '2008'
        };
        let component = render(
          <Wrapper>
            <CurrentDLInfo
              {...props}
            />
          </Wrapper>
        );
        assert.equal(component.text().includes('Driver license numbera90382kf'), true);
        assert.equal(component.text().includes('Expiration date11/13/2008'), true)
      });
    });
    describe('LicenseType', function() {
      it('lists which types of licenses the user has selected', function() {
        let data = {
          cardType: ['DL'],
          DLApp: {
            isApplying: true,
            action: 'new',
            licenseType: {
              type: ['car', 'cycle'],
              needEndorsement: 'Yes',
              endorsement: 'firefighter'
            }
          },
          licenseType: {
            type: ['car', 'cycle'],
            needEndorsement: 'Yes',
            endorsement: 'firefighter'
          },
        };
        let component = render(
          <Wrapper>
            <LicenseType
              { ...data }
            />
          </Wrapper>
        )
        assert.ok(component.text().includes('Car (Class C)'), 'car type not rendered in summary');
        assert.ok(component.text().includes('Motorcycle (Class M)'), 'moto type not rendered in summary');
        assert.ok(!component.text().includes('Housecar'));
        assert.ok(component.text().includes('Firefighter endorsementYes'), 'license endorsement not rendered in summary');
      });
    });
  });

  describe('IDApp', function() {

    describe('IDAction', function() {
      it('shows action for ID', function() {
        props.cardType = ['ID'];
        props.IDApp = {
          isApplying: true,
          action: 'new',
          cardChanges: {
            correctOrUpdate: ''
          }
        };
  
        let component = render(
          <Wrapper>
            <IDAction
              { ...props }
            />
          </Wrapper>
        );
        assert.equal(component.text().includes('Applying for the first time'), true);
      });
    });
    describe('CurrentIDInfo', function() {
      it('shows current card info when user is renewing a card and has provided info of card to renew', function() {
        props.cardType = ['ID'];
        props.cardAction = 'renew';
        props.IDApp = {
          isApplying: true,
          action: 'renew'
        };

        props.currentCardInfo = {
          number: 'a90382kf',
          month: '11',
          day: '13',
          year: '2008'
        };
        let component = render(
          <Wrapper>
            <CurrentIDInfo
              {...props}
            />
          </Wrapper>
        );
        assert.equal(component.text().includes('ID card numbera90382kf'), true);
        assert.equal(component.text().includes('Expiration date11/13/2008'), true)
      });
    });
    describe('SeniorID', function() {
      it('shows SeniorID selection', function(){
        props.seniorID = 'Yes';

        let component = render(
          <Wrapper>
            <SeniorID
              { ...props }
            />
          </Wrapper>
        )
        assert.equal(component.text().includes('Senior IDYes'), true);
      });
    });

    describe('IDRealID', function() {
      it('shows RealID fields for ID', function(){
        props.cardType = ['ID'];
        props.IDApp = {
          isApplying: true
        }
        props.realID = {
          getRealID : 'Yes',
          realIdDesignation: 'ID'
        };

        let component = render(
          <Wrapper>
            <IDRealID { ...props } />
          </Wrapper>
        )
        assert.equal(component.text().includes('Real-ID CompliantYes'), true);
      });
    });

    describe('DLRealID', function() {
      it('shows RealID fields DL', function(){
        props.cardType = ['DL'];
        props.DLApp.isApplying = true;
        props.realID = {
          getRealID : 'Yes',
          realIdDesignation: 'DL'
        };

        let component = render(
          <Wrapper>
            <DLRealID { ...props } />
          </Wrapper>
        );
        assert.equal(component.text().includes('Real-ID CompliantYes'), true);
      });
      it('does not show if user is not getting a DL', function() {
        let data = props;
        data.realID.getRealID = 'Yes';
        data.DLApp.isApplying = false;

        let component = render(
          <Wrapper>
            <DLRealID { ...data } />
          </Wrapper>
        );
        assert.equal(component.text().includes('Real-ID'), false);
      });

      it('does not show if realIdDesignation is not DL', function() {
        let data = props;
        data.realID.getRealID = 'Yes';
        data.realID.realIdDesignation = 'ID';

        let component = render(
          <Wrapper>
            <DLRealID { ...data } />
          </Wrapper>
        );
        assert.equal(component.text().includes('Real-ID'), false);
      });

      it('does not show if the user has not selected to get a real id', function() {
        let data = props;
        data.DLApp.isApplying = true;
        data.realID.getRealID = '';

        let component = render(
          <Wrapper>
            <DLRealID { ...data } />
          </Wrapper>
        );
        assert.equal(component.text().includes('Real-ID'), false);
      });
    });

    describe('ReducedOrNoFee', function() {
      it('returns null when no value', function(){
        props.IDApp = {
          isApplying: true,
          action: 'new',
          reducedFee: {
            ID: 'Yes',
            form: 'Yes'
          }
        };
        let component = render(
          <Wrapper>
            <ReducedOrNoFee
              { ...props }
              reducedFee = {props.IDApp.reducedFee}
            />
          </Wrapper>
        )
        assert.equal(component.find('.summary-section'), false);
      });
    });
  });

  describe('MyHistory', function() {
    describe('LicenseAndIDHistory', function() {
      it('shows "None" when no license and id history', function() {
        let licenseAndIdHistory = {
          DLIDNumber: '',
          issuedBy: '',
          month: '',
          day: '',
          year: '',
          isIssued: 'No'
        };

        let component = render(
          <Wrapper>
            <LicenseAndIdHistory
              { ...props }
              licenseAndIdHistory={licenseAndIdHistory}
            />
          </Wrapper>
        )
        assert.equal(component.text().includes('Previous DL/ID card number'), true);
        assert.equal(component.text().includes('None'), true);
      });

      it('shows license and id history selections', function(){
        let licenseAndIdHistory = {
          DLIDNumber: '111',
          issuedBy: 'CA',
          month: '1',
          day: '1',
          year: '2018',
          isIssued: 'Yes'
        };

        let component = render(
          <Wrapper>
            <LicenseAndIdHistory
              { ...props }
              licenseAndIdHistory={licenseAndIdHistory}
            />
          </Wrapper>
        )
        assert.equal(component.text().includes('Previous DL/ID card number'), true);
        assert.equal(component.text().includes('111'), true);
        assert.equal(component.text().includes('Issued in'), true);
        assert.equal(component.text().includes('CA'), true);
        assert.equal(component.text().includes('Expiration date'), true);
        assert.equal(component.text().includes('1/1/2018'), true);
      });
    });

    describe('NamesHistory', function() {
      it('shows "None" when no names history', function(){
        props.namesHistory = {
          hasUsedPreviousNames: 'No',
          previousNames: ''
        };

        let component = render(
          <Wrapper>
            <NamesHistory
              { ...props }
            />
          </Wrapper>
        )
        assert.equal(component.text().includes('Previous Names'), true);
        assert.equal(component.text().includes('None'), true);
      });

      it('shows names history', function(){
        props.namesHistory = {
          hasUsedPreviousNames: 'Yes',
          previousNames: 'John Doe'
        };

        let component = render(
          <Wrapper>
            <NamesHistory
              { ...props }
            />
          </Wrapper>
        )
        assert.equal(component.text().includes('Previous Names'), true);
        assert.equal(component.text().includes('John Doe'), true);
      });
    });

    describe('MedicalHistory', function() {
      describe('when not getting a DL', function() {
        it('does not show medical history', function() {
          let medicalHistory = {
            hasMedicalCondition: 'Yes',
            medicalInfo: 'blind'
          };
          props.DLApp.isApplying = false;

          let component = render(
            <Wrapper>
              <MedicalHistory
              { ...props }
              medicalHistory={medicalHistory}
              />
            </Wrapper>
          )
          assert.equal(component.text().includes('Medical conditions'), false);
          assert.equal(component.text().includes('None'), false);
        });
      });

      describe('when getting a DL', function() {
        it('shows "None" when no medical history', function() {
          let medicalHistory = {
            hasMedicalCondition: 'No',
            medicalInfo: ''
          };
          props.cardType = ['DL'];
          props.DLApp = {
            isApplying: true,
            action: 'new'
          };

          let component = render(
            <Wrapper>
            <MedicalHistory
            { ...props }
            medicalHistory={medicalHistory}
            />
            </Wrapper>
          )
          assert.equal(component.text().includes('Medical conditions'), true);
          assert.equal(component.text().includes('None'), true);
        });

      it('shows medical history', function(){
        let medicalHistory = {
          hasMedicalCondition: 'Yes',
          medicalInfo: 'Blind'
        };
        props.cardType = ['DL'];
        props.DLApp = {
          isApplying: true,
          action: 'new'
        };

        let component = render(
            <Wrapper>
            <MedicalHistory
            { ...props }
            medicalHistory={medicalHistory}
            />
            </Wrapper>
          )
          assert.equal(component.text().includes('Medical conditions'), true);
          assert.equal(component.text().includes('Blind'), true);
        });
      })
    });
    describe('LicenseIssues', function() {
      it('shows "None" when no license issues', function(){
        let licenseIssues = {
          isSuspended: 'No',
          month: '',
          day: '',
          year: '',
          reason: ''
        };

        let component = render(
          <Wrapper>
            <LicenseIssues
              { ...props }
              licenseIssues={licenseIssues}
            />
          </Wrapper>
        )
        assert.equal(component.text().includes('Driving record'), true);
        assert.equal(component.text().includes('None'), true);
      });

      it('shows license issues selections', function(){
        let licenseIssues = {
          isSuspended: 'Yes',
          month: '11',
          day: '11',
          year: '2015',
          reason: 'DUI'
        };

        let component = render(
          <Wrapper>
            <LicenseIssues
              { ...props }
              licenseIssues={licenseIssues}
            />
          </Wrapper>
        )
        assert.equal(component.text().includes('Driving record'), true);
        assert.equal(component.text().includes('DUI'), true);
        assert.equal(component.text().includes('Record date:'), true);
        assert.equal(component.text().includes('11/11/2015'), true);
      });
    });

    describe('VeteransService', function() {
      it('shows veterans service selections', function(){
        let veteransService = {
          isVeteran: 'Yes',
          receiveBenefits: 'No',
          previouslyDesignated: 'Yes',
          veteransIdentifier: 'Yes'
        };

        let component = render(
          <Wrapper>
            <VeteransService
              { ...props }
              veteransService={veteransService}
            />
          </Wrapper>
        )
        assert.equal(component.text().includes('Veteran:'), true);
        assert.equal(component.text().includes('Yes'), true);
        assert.equal(component.text().includes('Get benefit information:'), true);
        assert.equal(component.text().includes('No'), true);
        assert.equal(component.text().includes('"Veteran" printed on card(s):'), true);
      });
    });
  });

  describe('MyBasics', function() {
    beforeEach(function() {
      props = Object.assign({}, data.application);
      props.summary = 'summary';
    });
    describe('Empty', function() {
      it('returns null when no value', function() {
        let component = render(
          <Wrapper>
            <Empty { ...props } />
          </Wrapper>
        )
        assert.equal(component.text().includes('No information has been entered yet'), true);
      });
    });
    describe('LegalName', function() {
      it('shows name when name entered', function() {
        props.legalName = {
          firstName: 'this',
          middleName: 'is',
          lastName: 'my',
          suffix: 'III'
        };
        props.editKey = 'legalName';
        let component = render(
          <Wrapper>
            <LegalName
              { ...props }
            />
          </Wrapper>
        )
        assert.equal(component.text().includes('Name'), true);
        assert.equal(component.text().includes('this is my III'), true);
      });
    });

    describe('DateOfBirth', function() {
      it('shows date of birth fields', function(){
        props.dateOfBirth = {
          month: '11',
          day: '11',
          year: '1999'
        };
        props.editKey = 'dateOfBirth';
        let component = render(
          <Wrapper>
            <DateOfBirth
              { ...props }
            />
          </Wrapper>
        )
        assert.equal(component.text().includes('Date Of Birth'), true);
        assert.equal(component.text().includes('11/11/1999'), true);
      });
    });
    describe('Address', function() {
      it('shows address fields', function(){
        props.basics.address.homeAddressSameAsMailing = 'No';
        props.basics.address.home = {
          street_1: '111 Main Street',
          street_2: '',
          city: 'Sacramento',
          state: 'CA',
          zip: '95814'
        };

        props.basics.address.mailing = {
          street_1: '222 High Street',
          street_2: '',
          city: 'Beverly Hills',
          state: 'CA',
          zip: '90210'
        };

        let component = render(
          <Wrapper>
            <Address
              { ...props }
              address = {props.basics.address}
            />
          </Wrapper>
        )

        assert.equal(component.text().includes(`${translations.summaryPage.myBasics.homeAddress}`), true);
        assert.equal(component.text().includes('111 Main Street'), true);
        assert.equal(component.text().includes('Sacramento, CA 95814'), true);
        assert.equal(component.text().includes(`${translations.summaryPage.myBasics.mailingAddress}`), true);
        assert.equal(component.text().includes('222 High Street'), true);
        assert.equal(component.text().includes('Beverly Hills, CA 90210'), true);
      });
    });
    describe('TraitsHeightWeight', function() {
      it('shows height and weight traits', function(){
        props.traitsHeightWeight = {
          weight: '200',
          heightFeet: '6',
          heightInches: '3'
        };

        let component = render(
          <Wrapper>
            <TraitsHeightWeight
              { ...props }
            />
          </Wrapper>
        )
        assert.equal(component.text().includes('Height'), true);
        assert.equal(component.text().includes('6 feet 3 inches'), true);
        assert.equal(component.text().includes('Weight'), true);
        assert.equal(component.text().includes('200 pounds'), true);
      });
    });
    describe('PhysicalTraits', function() {
      it('shows physical traits', function(){
        props.physicalTraits = {
          sex: 'Female',
          eyeColor: 'Green',
          hairColor: 'Black'
        };

        let component = render(
          <Wrapper>
            <PhysicalTraits
              { ...props }
            />
          </Wrapper>
        )
        assert.equal(component.text().includes('Sex'), true);
        assert.equal(component.text().includes('Female'), true);
        assert.equal(component.text().includes('Eye Color'), true);
        assert.equal(component.text().includes('Green'), true);
        assert.equal(component.text().includes('Hair Color'), true);
        assert.equal(component.text().includes('Black'), true);
      });
    });
    describe('SocialSecurity', function() {
      it('shows social security number', function(){
        let socialSecurity = {
          hasSocialSecurity: 'Yes',
          part1: '234',
          part2: '56',
          part3: '1293'
        };

        let component = render(
          <Wrapper>
            <SocialSecurity
              { ...props }
              socialSecurity={socialSecurity}
            />
          </Wrapper>
        )
        assert.equal(component.text().includes('Social Security Number'), true);
        assert.equal(component.text().includes('xxx-xx-1293'), true);
      });
    });
  });

  describe('Voting', function() {
    describe('CitizenStatus', function() {
      it('shows citizens status', function(){
        let citizenStatus = 'Yes';
  
        let component = render(
          <Wrapper>
            <CitizenStatus
              { ...props }
              citizenStatus={citizenStatus}
            />
          </Wrapper>
        )
        assert.equal(component.text().includes('US Citizen: Yes'), true);
      });
      it('shows decline to answer text when user has declined to answer', function() {
        let citizenStatus = 'decline';
  
        let component = render(
          <Wrapper>
            <CitizenStatus
              { ...props }
              citizenStatus={citizenStatus}
            />
          </Wrapper>
        )
        assert.equal(component.text().includes(`${translations.summaryPage.voterRegistration.citizen}: ${translations.shared.commonAnswers.declineToAnswer}`), true);
      });
    });

    describe('EligibilityRequirements', function() {
      it('shows eligibility', function(){
        let eligibilityRequirements = 'Yes';
  
        let component = render(
          <Wrapper>
            <EligibilityRequirements
              { ...props }
              eligibilityRequirements={eligibilityRequirements}
            />
          </Wrapper>
        )
        assert.equal(component.text().includes(`${translations.summaryPage.voterRegistration.eligible}: Yes`), true);
      });
    });

    describe('OptOut', function() {
      it('shows opt out', function(){
        let optOut = 'new';

        let component = render(
          <Wrapper>
            <OptOut
              { ...props }
              optOut={optOut}
            />
          </Wrapper>
        )
        assert.equal(component.text().includes('Choose opt out: new'), true);
      });
    });

    describe('PoliticalPartyChoose', function() {
      it('shows political party selections', function(){
        let politicalPartyChoose = {
          isSelected: 'Yes',
          politicalPartyChoose: 'Green Party'
        };

        let component = render(
          <Wrapper>
            <PoliticalPartyChoose
              { ...props }
              politicalPartyChoose={politicalPartyChoose}
            />
          </Wrapper>
        )
        assert.equal(component.text().includes('Political partyGreen Party'), true);
      });

      it('shows No Answer after user has switched answer', function() {
        let politicalPartyChoose = {
          isSelected: 'Skip',
          politicalPartyChoose: 'Green Party'
        };

        let component = render(
          <Wrapper>
            <PoliticalPartyChoose
              { ...props }
              politicalPartyChoose={politicalPartyChoose}
            />
          </Wrapper>
        );
        assert.equal(component.text().includes('Political partyNo answer'), true);
      });

      it('shows the other party typed into the form', function() {
        let politicalPartyChoose = {
          isSelected: 'Yes',
          politicalPartyChoose: 'Other',
          otherParty: 'the French Canadians'
        };

        let component = render(
          <Wrapper>
            <PoliticalPartyChoose
              { ...props }
              politicalPartyChoose={politicalPartyChoose}
            />
          </Wrapper>
        );
        assert.equal(component.text().includes('Political partythe French Canadians'), true);
      });
    });

    describe('BallotLanguage', function() {
      it('shows ballot language selection', function(){
        let ballotLanguage = 'ko';

        let component = render(
          <Wrapper>
            <BallotLanguage
              { ...props }
              ballotLanguage={ballotLanguage}
            />
          </Wrapper>
        )
        assert.equal(component.text().includes('Ballot language preference: Korean'), true);
      });
    });

    describe('BallotByMail', function() {
      it('shows ballot by mail selection', function(){
        let ballotByMail = 'Yes';

        let component = render(
          <Wrapper>
            <BallotByMail
              { ...props }
              ballotByMail={ballotByMail}
            />
          </Wrapper>
        )
        assert.equal(component.text().includes('Vote by mail: Yes'), true);
      });
    });

    describe('ContactMethods', function() {
      it('shows contact methods selections', function(){
        let contactMethods = {
          shouldContact: 'Yes',
          emailAddress: 'email@email.com',
          phoneNumber1: '111',
          phoneNumber2: '111',
          phoneNumber3: '1111'
        };

        let component = render(
          <Wrapper>
            <ContactMethods
              { ...props }
              contactMethods={contactMethods}
            />
          </Wrapper>
        )
        assert.equal(component.text().includes('Should Contact: Yes'), true);
        assert.equal(component.text().includes('Email Address: email@email.com'), true);
        assert.equal(component.text().includes('Phone Number: (111) 111-1111'), true);
      });
    });
  });

  describe('OrganDonation', function() {
    it('shows organ donation selections', function(){
      props.organDonation = {
        donateMoney: 'Yes',
        donateOrgan: 'Yes'
      };
      let component = render(
        <Wrapper>
          <OrganDonation { ...props }/>
        </Wrapper>
      );
      assert.equal(component.text().includes('Be an organ donorYes'), true);
      assert.equal(component.text().includes('Donate $2Yes'), true);
    });
  });

  describe('GuardianSignature', function() {
    it('shows parent/guardian signature details', function(){
      let guardianSignature = {
        isSigned:  'Yes',
        guardianInfo: [{
          id: '0',
          acceptLiabilities: true,
          signature: {
            name: 'GuardianSignature',
            month: '10',
            day: '4',
            year: '2018',
          },
          phoneNumber: '(616)-923-1221',
          address: {
            street_1: '865 Main Street',
            street_2: 'Unit no. 05',
            city: 'Crazidino Here',
            state: 'CA',
            zip: '94000',
          },
          ID:{
            number: 'XYZ12344321',
            issuedBy: 'U.S.A.',
            expirationMonth: '10',
            expirationDay: '14',
            expirationYear: '2020'
          }
        },
        {
          id: '1',
          acceptLiabilities: null,
          signature: {
            name: '',
            month: '',
            day: '',
            year: '',
          },
          phoneNumber: '',
          address: {
            street_1: '',
            street_2: '',
            city: '',
            state: 'CA',
            zip: '',
          },
          ID:{
            number: '',
            issuedBy: '',
            expirationMonth: '',
            expirationDay: '',
            expirationYear: ''
          }
        }]
      };

      let component = render(
        <GuardianSignature
          {...props}
          guardianSignature={guardianSignature}
        />
      )

      assert.equal(component.text().includes('GuardianSignature'), true);
      assert.equal(component.text().includes('10'), true);
      assert.equal(component.text().includes('4'), true);
      assert.equal(component.text().includes('2018'), true);
      assert.equal(component.text().includes('(616)-923-1221'), true);
      assert.equal(component.text().includes('865 Main Street'), true);
      assert.equal(component.text().includes('Unit no. 05'), true);
      assert.equal(component.text().includes('Crazidino Here'), true);
      assert.equal(component.text().includes('CA'), true);
      assert.equal(component.text().includes('94000'), true);
      assert.equal(component.text().includes('XYZ12344321'), true);
      assert.equal(component.text().includes('U.S.A.'), true);
      assert.equal(component.text().includes('10'), true);
      assert.equal(component.text().includes('14'), true);
      assert.equal(component.text().includes('2020'), true);
    });
  });
});

