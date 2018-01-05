'use strict';

import assert         from 'assert';
import 'jsdom-global/register';
import React          from 'react';
import { render }     from 'enzyme';
import data           from '../../../server/helpers/client-default-state.js';
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
  OptOut
} from '../../../client/presentations/summary/index.js';

describe('Summary section', function() {
  let props = data.application;

  describe('Empty', function() {
    it('shows no information entered', function() {
      let component = render(
        <Empty
          {...props}
        />
      )
      assert.equal(component.text().includes('No information has been entered yet'), true);
    });
  });

  describe('LegalName', function() {
    it('shows legal name fields', function() {
      let legalName = {
        firstName: 'this',
        middleName: 'is',
        lastName: 'my',
        suffix: 'III'
      };
      let component = render(
        <LegalName
          { ...props }
          legalName={legalName }
        />
      )
      assert.equal(component.text().includes('First Name: this'), true);
      assert.equal(component.text().includes('Middle Name: is'), true);
      assert.equal(component.text().includes('Last Name: my'), true);
      assert.equal(component.text().includes('Suffix: III'), true);
    });
  });

  describe('DateOfBirth', function() {
    it('shows date of birth fields', function(){
      let dateOfBirth = {
        month: '11',
        day: '11',
        year: '1999'
      };
      let component = render(
        <DateOfBirth 
          { ...props }
          dateOfBirth={dateOfBirth}
        />
      )
      assert.equal(component.text().includes('Date of birth: 11/11/1999'), true);
    });
  });

  describe('Cards', function() {
    it('shows DL and ID when getting both new', function() {
      let cardType = {
        new: ['ID', 'DL'],
        renew: ''
      };
      let component = render(
        <Cards 
          { ...props }
          cardType={cardType}
        />
      );
      assert.equal(component.text().includes('Applying for new: ID and Driver License'), true);
    });

    it('shows DL when only getting a new DL', function() {
      let cardType = {
        new: ['DL'],
        renew: ''
      };
      let component = render(
        <Cards
          { ...props }
          cardType = {cardType}
        />
      )
      assert.equal(component.text().includes('Applying for new: Driver License'), true);
    });

    it('shows current card info when user is renewing a card and has provided info of card to renew', function() {
      let cardType = {
        new: [],
        renew: 'ID'
      };
      let currentCardInfo = {
        number: 'a90382kf',
        month: '11',
        day: '13',
        year: '2008'
      };
      let component = render(
        <Cards
          cardType = {cardType}
          currentCardInfo = {currentCardInfo}
        />
      );
      assert.equal(component.text().includes('Renewing: ID'), true);
      assert.equal(component.text().includes('Renewal ID number: a90382kf'), true);
      assert.equal(component.text().includes('Applying for new:'), false);
    })
  });

  describe('SeniorID', function() {
    it('shows SeniorID selection', function(){
      let seniorID = 'Yes';
  
      let component = render(
        <SeniorID
          { ...props }
          seniorID={seniorID}
        />
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
        <RealID
          { ...props }
        />
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
        <LicenseType
          { ...props }
        />
      )
      assert.ok(component.text().includes('Need to drive: Car, and I\'m not sure'), 'license type not rendered in summary');
    });
  });

  describe('ReducedFee', function() {
    it('shows that user does not have correct forms for reduced fee application', function() {
      let reducedFee = {
        ID: 'Yes',
        form: 'No'
      }
      let component = render(
        <ReducedFee 
          reducedFee = { reducedFee }
        />
      )
      assert.equal(component.text().includes('Correct Forms for Reduced Fee: No'), true);
    });
  });

  describe('HomeAddress', function() {
    it('shows home address fields', function(){
      let homeAddress = {
        street_1: '111 Main Street',
        street_2: '',
        city: 'Sacramento',
        state: 'CA',
        zip: '95814'
      };
  
      let component = render(
        <HomeAddress
          { ...props }
          homeAddress={homeAddress}
        />
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
      let mailingAddress = {
        street_1: '111 Main Street',
        street_2: '',
        city: 'Sacramento',
        state: 'CA',
        zip: '95814'
      };
  
      let component = render(
        <MailingAddress
          { ...props }
          mailingAddress={mailingAddress}
        />
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
      let traitsHeightWeight = {
        weight: '200',
        heightFeet: '6',
        heightInches: '3'
      };
  
      let component = render(
        <TraitsHeightWeight
          { ...props }
          traitsHeightWeight={traitsHeightWeight}
        />
      )
      assert.equal(component.text().includes('Height: 6 feet 3 inches'), true);
      assert.equal(component.text().includes('Weight: 200 pounds'), true);
    });
  });

  describe('PhysicalTraits', function() {
    it('shows physical traits', function(){
      let physicalTraits = {
        sex: 'Female',
        eyeColor: 'Green',
        hairColor: 'Black'
      };
  
      let component = render(
        <PhysicalTraits
          { ...props }
          physicalTraits={physicalTraits}
        />
      )
      assert.equal(component.text().includes('Sex: Female'), true);
      assert.equal(component.text().includes('Eye Color: Green'), true);
      assert.equal(component.text().includes('Hair Color: Black'), true);
    });
  });

  describe('OrganDonation', function() {
    it('shows organ donation selections', function(){
      let organDonation = {
        donateMoney: 'Yes',
        donateOrgan: 'Yes'
      };
  
      let component = render(
        <OrganDonation
          { ...props }
          organDonation={organDonation}
        />
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
        <SocialSecurity
          { ...props }
          socialSecurity={socialSecurity}
        />
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
        <LicenseAndIdHistory
          { ...props }
          licenseAndIdHistory={licenseAndIdHistory}
        />
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
        <NamesHistory
          { ...props }
        />
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
        <MedicalHistory
          { ...props }
          medicalHistory={medicalHistory}
        />
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
        <LicenseIssues
          { ...props }
          licenseIssues={licenseIssues}
        />
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
        <VeteransService
          { ...props }
          veteransService={veteransService}
        />
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
        <CitizenStatus
          { ...props }
          citizenStatus={citizenStatus}
        />
      )
      assert.equal(component.text().includes('US Citizen: Yes'), true);
    });
  });

  describe('EligibilityRequirements', function() {
    it('shows eligibility', function(){
      let eligibilityRequirements = 'Yes';

      let component = render(
        <EligibilityRequirements
          { ...props }
          eligibilityRequirements={eligibilityRequirements}
        />
      )
      assert.equal(component.text().includes('Voter registration eligibility met: Yes'), true);
    });
  });

  describe('OptOut', function() {
    it('shows opt out', function(){
      let optOut = 'new';

      let component = render(
        <OptOut
          { ...props }
          optOut={optOut}
        />
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
        <PoliticalPartyChoose
          { ...props }
          politicalPartyChoose={politicalPartyChoose}
        />
      )
      assert.equal(component.text().includes('Political Party: Green Party'), true);
      assert.equal(component.text().includes('Political Party Preference: Yes'), true);
    });
  });

  describe('BallotLanguage', function() {
    it('shows ballot language selection', function(){
      let ballotLanguage = 'Korean';

      let component = render(
        <BallotLanguage
          { ...props }
          ballotLanguage={ballotLanguage}
        />
      )
      assert.equal(component.text().includes('Ballot language preference: Korean'), true);
    });
  });

  describe('BallotByMail', function() {
    it('shows ballot by mail selection', function(){
      let ballotByMail = 'Yes';

      let component = render(
        <BallotByMail
          { ...props }
          ballotByMail={ballotByMail}
        />
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
        <ContactMethods
          { ...props }
          contactMethods={contactMethods}
        />
      )
      assert.equal(component.text().includes('Should Contact: Yes'), true);
      assert.equal(component.text().includes('Email Address: email@email.com'), true);
      assert.equal(component.text().includes('Phone Number: 111-111-1111'), true);
    });
  });
});

