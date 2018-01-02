'use strict';

import assert           from 'assert';
import React            from 'react';
import configure        from '../support/configure-enzyme';
import { render }       from 'enzyme';
import { spy }          from 'sinon';
import store            from '../support/page-store';
import wrapperGenerator from '../support/wrapper';
import data             from '../../../server/helpers/client-default-state.js';
import {
  Empty,
  LegalName,
  DateOfBirth,
  Cards,
  SeniorID,
  RealID,
  ReducedFee,
  LicenseType,
  HomeAddress,
  MailingAddress,
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
} from '../../../client/presentations/summary/index.js';

describe('Summary section', function() {
  const Wrapper = wrapperGenerator(store);
  let props = data.application;

  beforeEach(function() {
    let onChange = spy();
    let props = {
      onChange,
      'legalName': {
        'firstName': '',
        'middleName': '',
        'lastName': '',
        'suffix': ''
      },
      'cardType': {
        'new': [],
        'renew': '',
        'youthIDInstead': ''
      },
      'currentCardInfo': {
        'number': '',
        'day': '',
        'month': '',
        'year': ''
      },
      'dateOfBirth': {
        'day': '',
        'month': '',
        'year': ''
      },
      'realID': {
        'getRealID': '',
        'realIdDesignation': ''
      },
      'licenseType': {
        'type': [],
        'endorsement': [],
        'needEndorsement': ''
      },
      'reducedFee': {
        'ID': '',
        'form': ''
      },
      'seniorID': '',
      'homeAddress': {
        'street_1': '',
        'street_2': '',
        'city': '',
        'state': '',
        'zip': ''
      },
      'mailingAddress': {
        'street_1': '',
        'street_2': '',
        'city': '',
        'state': '',
        'zip': ''
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
      },
      'organDonation': {
        'donate': '',
        'contribute': ''
      },
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
      },
      'citizenStatus': '',
      'ballotByMail': '',
      'eligibilityRequirements': '',
      'politicalPartyChoose': {
        'isSelected': '',
        'politicalPartyChoose': ''
      },
      'ballotLanguage': '',
      'optOut': '',
      'contactMethods': {
        'shouldContact': '',
        'emailAddress': '',
        'phoneNumber': ''
      }
    };
  });

  describe('Empty', function() {
    it('returns null when no value', function() {

      let component = render(
        <Wrapper>
          <LegalName { ...props } />
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
      assert.equal(component.text().includes('First Name: this'), true);
      assert.equal(component.text().includes('Middle Name: is'), true);
      assert.equal(component.text().includes('Last Name: my'), true);
      assert.equal(component.text().includes('Suffix: III'), true);
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
      assert.equal(component.text().includes('Date of birth: 11/11/1999'), true);
    });
  });

  describe('Cards', function() {
    it('shows DL and ID when getting both new', function() {
      props.cardType = {
        new: ['ID', 'DL'],
        renew: ''
      };
      props.cardAction = 'new';
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
        new: ['DL'],
        renew: ''
      };
      props.cardAction = 'new';
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
        new: [],
        renew: 'ID',
        change: ''
      };
      props.currentCardInfo = {
        number: 'a90382kf',
        month: '11',
        day: '13',
        year: '2008'
      };
      props.cardAction = 'renew';
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
      props.cardType.change = 'DL'
      props.cardAction = 'change'
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
      props.cardType.change = 'DL'
      props.cardAction = 'change'
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
          <RealID
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
          <RealID
            { ...props }
          />
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

  describe('HomeAddress', function() {
    it('shows home address fields', function(){
      props.homeAddress = {
        street_1: '111 Main Street',
        street_2: '',
        city: 'Sacramento',
        state: 'CA',
        zip: '95814'
      };

      let component = render(
        <Wrapper>
          <HomeAddress
            { ...props }
          />
        </Wrapper>
      )
      assert.equal(component.text().includes('Home address:'), true);
      assert.equal(component.text().includes('Street Address: 111 Main Street'), true);
      assert.equal(component.text().includes('City: Sacramento'), true);
      assert.equal(component.text().includes('State: CA'), true);
      assert.equal(component.text().includes('Zipcode: 95814'), true);
    });
  });

  describe('MailingAddress', function() {
    it('shows mailing address fields', function(){
      props.mailingAddress = {
        street_1: '111 Main Street',
        street_2: '',
        city: 'Sacramento',
        state: 'CA',
        zip: '95814'
      };

      let component = render(
        <Wrapper>
          <MailingAddress
            { ...props }
          />
        </Wrapper>
      )
      assert.equal(component.text().includes('Mailing address:'), true);
      assert.equal(component.text().includes('Street Address: 111 Main Street'), true);
      assert.equal(component.text().includes('City: Sacramento'), true);
      assert.equal(component.text().includes('State: CA'), true);
      assert.equal(component.text().includes('Zipcode: 95814'), true);
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
      assert.equal(component.text().includes('Height: 6 feet 3 inches'), true);
      assert.equal(component.text().includes('Weight: 200 pounds'), true);
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
      assert.equal(component.text().includes('Sex: Female'), true);
      assert.equal(component.text().includes('Eye Color: Green'), true);
      assert.equal(component.text().includes('Hair Color: Black'), true);
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
      )
      assert.equal(component.text().includes('Donate Organs: Yes'), true);
      assert.equal(component.text().includes('Voluntary Contribution: Yes'), true);
    });
  });

  describe('SocialSecurity', function() {
    it('shows social security number', function(){
      let socialSecurity = {
        part1: '111',
        part2: '11',
        part3: '1111',
        hasSocialSecurity: 'Yes'
      };

      let component = render(
        <Wrapper>
          <SocialSecurity
            { ...props }
            socialSecurity={socialSecurity}
          />
        </Wrapper>
      )
      assert.equal(component.text().includes('Has Social Security: Yes'), true);
      assert.equal(component.text().includes('Social Security: 111-11-1111'), true);
    });
  });

  describe('LicenseAndIDHistory', function() {
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
      assert.equal(component.text().includes('Has existing DL/ID: Yes'), true);
      assert.equal(component.text().includes('Existing DL/ID number: 111'), true);
      assert.equal(component.text().includes('Existing DL/ID issued by: CA'), true);
      assert.equal(component.text().includes('Existing DL/ID expiration date: 1/1/2018'), true);
    });
  });

  describe('NamesHistory', function() {
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
      assert.equal(component.text().includes('Has used previous names: Yes'), true);
      assert.equal(component.text().includes('Previous Names: John Doe'), true);
    });
  });

  describe('MedicalHistory', function() {
    it('shows medical history', function(){
      let medicalHistory = {
        hasMedicalCondition: 'Yes',
        medicalInfo: 'Blind'
      };

      let component = render(
        <Wrapper>
          <MedicalHistory
            { ...props }
            medicalHistory={medicalHistory}
          />
        </Wrapper>
      )
      assert.equal(component.text().includes('Medical history: Yes'), true);
      assert.equal(component.text().includes('Medical conditions: Blind'), true);
    });
  });

  describe('LicenseIssues', function() {
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
      assert.equal(component.text().includes('Have suspended license: Yes'), true);
      assert.equal(component.text().includes('Suspended license date: 11/11/2015'), true);
      assert.equal(component.text().includes('Suspended license reason: DUI'), true);
    });
  });

  describe('VeteransService', function() {
    it('shows veterans service selections', function(){
      let veteransService = {
        isVeteran: 'Yes',
        receiveBenefits: 'Yes',
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
      assert.equal(component.text().includes('Is veteran: Yes'), true);
      assert.equal(component.text().includes('Receive veterans benefits: Yes'), true);
      assert.equal(component.text().includes('Veterans identifier on license: Yes'), true);
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
      assert.equal(component.text().includes('Political Party: Green Party'), true);
      assert.equal(component.text().includes('Political Party Preference: Yes'), true);
    });
  });

  describe('BallotLanguage', function() {
    it('shows ballot language selection', function(){
      let ballotLanguage = 'Korean';

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
        phoneNumber: '111-111-1111'
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
      assert.equal(component.text().includes('Phone Number: 111-111-1111'), true);
    });
  });

  describe('GuardianSignature', function() {
    it('shows parent/guardian signature details', function(){
      let guardianSignature = {
        isSigned:  'Yes',
        guardianInfo: [{
          id: 'first',
          acceptLiabilities: true,
          signature: 'GuardianSignature',
          signatureDateMonth: '10',
          signatureDateDay: '4',
          signatureDateYear: '2018',
          phoneNumber: '(616)-923-1221',
          street_1: '865 Main Street',
          street_2: 'Unit no. 05',
          city: 'Crazidino Here',
          state: 'CA',
          zip: '94000',
          IDNumber: 'XYZ12344321',
          IDIssuedBy: 'U.S.A.',
          IDExpirationDateMonth: '10',
          IDExpirationDateDay: '14',
          IDExpirationDateYear: '2020'
        },
        {
          id: '',
          acceptLiabilities: null,
          signature: '',
          signatureDateMonth: '',
          signatureDateDay: '',
          signatureDateYear: '',
          phoneNumber: '',
          street_1: '',
          street_2: '',
          city: '',
          state: '',
          zip: '',
          IDNumber: '',
          IDIssuedBy: '',
          IDExpirationDateMonth: '',
          IDExpirationDateDay: '',
          IDExpirationDateYear: ''
        }]
      };

      let component = render(
        <GuardianSignature
          {...props}
          guardianSignature={guardianSignature}
        />
      )

      assert.equal(component.text().includes('Parent/guardian available: Yes'), true);
      assert.equal(component.text().includes('Accept Liabilities: Yes'), true);
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

