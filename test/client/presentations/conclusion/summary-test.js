'use strict';

import assert           from 'assert';
import React            from 'react';
import configure        from '../../support/configure-enzyme';
import { render }       from 'enzyme';
import { spy }          from 'sinon';
import store            from '../../support/page-store';
import wrapperGenerator from '../../support/wrapper';
import data             from '../../../../server/helpers/client-default-state.js';
import {
  Empty,
  LegalName,
  DateOfBirth,
  Cards,
  SeniorID,
  RealID,
  ReducedFee,
  LicenseType,
  Address,
  TraitsHeightWeight,
  PhysicalTraits,
  OrganDonation,
  SocialSecurity,
  LicenseIssues,
  LicenseAndIdHistory,
  NamesHistory,
  MedicalHistory,
  VeteransService,
  CitizenStatus,
  EligibilityRequirements,
  BallotByMail,
  PoliticalPartyChoose,
  BallotLanguage,
  ContactMethods,
  ContinueButton,
  OptOut,
  GuardianSignature
} from '../../../../client/presentations/conclusion/summary/index.js';

describe('Summary section', function() {
  const Wrapper = wrapperGenerator(store);
  let props = data.application;

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

  describe('Cards', function() {
    it('shows DL and ID when getting both new', function() {
      props.cardType = {
        IDDL: ['ID', 'DL'],
        cardAction: 'new',
        ID: {
          isApplying: true,
          action: 'new'
        },
        DL: {
          isApplying: true,
          action: 'new'
        }
      };

      let component = render(
        <Wrapper>
          <Cards
            { ...props }
          />
        </Wrapper>
      );
      assert.equal(component.text().includes('Applying for new: ID and Driver License'), true);
    });

    it('shows DL when only getting a new DL', function() {
      props.cardType = {
        IDDL: ['DL'],
        cardAction: 'new',
        DL: {
          isApplying: true,
          action: 'new'
        },
        ID: {
          isApplying: false,
          action: ''
        }
      };

      let component = render(
        <Wrapper>
          <Cards
            { ...props }
          />
        </Wrapper>
      )
      assert.equal(component.text().includes('Applying for new: Driver License'), true);
    });

    it('shows current card info when user is renewing a card and has provided info of card to renew', function() {
      props.cardType = {
        IDDL: ['ID'],
        cardAction: 'renew',
        DL: {
          isApplying: false,
          action: ''
        },
        ID: {
          isApplying: true,
          action: 'renew'
        }
      };
      props.currentCardInfo = {
        number: 'a90382kf',
        month: '11',
        day: '13',
        year: '2008'
      };
      let component = render(
        <Wrapper>
          <Cards
            {...props}
          />
        </Wrapper>
      );
      assert.equal(component.text().includes('Renewing: ID'), true);
      assert.equal(component.text().includes('Renewal ID number: a90382kf'), true);
      assert.equal(component.text().includes('Expiration date of ID to renew: 11/13/2008'), true)
      assert.equal(component.text().includes('Applying for new:'), false);
    });

    it('shows which sections are being updated', function() {
      props.cardType.IDDL = ['DL'];
      props.cardType.cardAction = 'change';
      props.cardType.DL.action = 'change';
      props.cardType.DL.isApplying = true;
      props.cardType.DL.action = '';
      props.cardType.DL.isApplying = false;
      props.cardChanges.correctOrUpdate = 'update'
      props.cardChanges.sections = ['name', 'restrictions'];
      let component = render(
        <Cards
          {...props}
        />
      );
      assert.equal(component.text().includes('Updating: Driver License'), true);
      assert.equal(component.text().includes('Updating sections: Name and Add or remove a restriction'), true);
    });

    it('shows the text the user entered in the case of a "Something else" change', function() {
      props.cardType.IDDL = ['DL'];
      props.cardType.cardAction = 'change';
      props.cardType.DL = {
        isApplying: true,
        action: 'change'
      };
      props.cardType.ID = {
        isApplying: false,
        action: ''
      };
      props.cardChanges.correctOrUpdate = 'update'
      props.cardChanges.sections = ['other'];
      props.cardChanges.other = 'my picture sucks!'
      let component = render(
        <Cards {...props} />
      );
      assert.equal(component.text().includes('Updating sections: my picture sucks!'), true);
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
      assert.equal(component.text().includes('Senior ID: Yes'), true);
    });
  });

  describe('RealID', function() {
    it('shows RealID fields', function(){
      props.realID = {
        getRealID : 'Yes',
        realIdDesignation: 'ID'
      };

      let component = render(
        <Wrapper>
          <RealID { ...props } />
        </Wrapper>
      )
      assert.equal(component.text().includes('Real ID: Yes'), true);
      assert.equal(component.text().includes('Real ID Designation: ID'), true);
    });
  });

  describe('LicenseType', function() {
    it('lists which types of licenses the user has selected', function() {
      props.licenseType.type = ['car', 'unsure'];
      props.licenseType.needEndorsement = 'No';
      let component = render(
        <Wrapper>
          <LicenseType
            { ...props }
          />
        </Wrapper>
      )
      assert.ok(component.text().includes('Need to drive: Car, and I\'m not sure'), 'license type not rendered in summary');
    });
  });

  describe('ReducedFee', function() {
    it('returns null when no value', function(){
      let component = render(
        <Wrapper>
          <ReducedFee
            { ...props }
          />
        </Wrapper>
      )
      assert.equal(component.find('.summary-section'), false);
    });
  });

  describe('ReducedFee', function() {
    it('shows that user does not have correct forms for reduced fee application', function() {
      props.reducedFee = {
        ID: 'Yes',
        form: 'No'
      }
      let component = render(
        <Wrapper>
          <ReducedFee {...props} />
        </Wrapper>
      )
      assert.ok(component.text().includes('Correct Forms for Reduced Fee: No'), 'reduced fee form line not rendered');
    });
  });

  describe('Address', function() {
    it('shows address fields', function(){
      props.homeAddressSameAsMailing = 'No';
      props.address.home = {
        street_1: '111 Main Street',
        street_2: '',
        city: 'Sacramento',
        state: 'CA',
        zip: '95814'
      };

      props.address.mailing = {
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
          />
        </Wrapper>
      )
      assert.equal(component.text().includes('Home Address'), true);
      assert.equal(component.text().includes('111 Main Street'), true);
      assert.equal(component.text().includes('Sacramento, CA 95814'), true);
      assert.equal(component.text().includes('Mailing Address'), true);
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
        props.cardType = {
          IDDL: ['ID'],
          cardAction: 'new'
        };

        let component = render(
          <Wrapper>
            <MedicalHistory
            { ...props }
            medicalHistory={medicalHistory}
            />
          </Wrapper>
        )
        assert.equal(!component.text().includes('Medical conditions'), true);
        assert.equal(!component.text().includes('None'), true);
      });
    });

    describe('when getting a DL', function() {
      it('shows "None" when no medical history', function() {
        let medicalHistory = {
          hasMedicalCondition: 'No',
          medicalInfo: ''
        };
        props.cardType = {
          IDDL: ['DL'],
          cardAction: 'new'
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
      props.cardType = {
        IDDL: ['DL'],
        cardAction: 'new'
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
      assert.equal(component.text().includes('Voter registration eligibility met: Yes'), true);
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
      assert.equal(component.text().includes('Ballot by mail: Yes'), true);
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

