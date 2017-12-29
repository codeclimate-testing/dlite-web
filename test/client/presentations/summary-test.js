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

  describe('LegalName', function() {
    it('returns null when no value', function() {

      let component = render(
        <LegalName
          { ...props }
        />
      )
      assert.equal(component.find('.summary-section'), false);
    });

    it('has 4 entries when full name entered', function() {
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
      assert.equal(component.find('.summary-section')._root[0].children.length, 4, true);
    });
  });
  describe('DateOfBirth', function() {
    it('returns null when no value', function(){
      let component = render(
        <DateOfBirth 
          { ...props }
        />
      )
      assert.equal(component.find('.summary-section'), false);
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
          cardType = {cardType}
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
  describe('RealID', function() {
    it('returns null when no value', function(){
  
      let component = render(
        <RealID
          { ...props }
        />
      )
      assert.equal(component.find('.summary-section'), false);
    });
  });
  describe('SummaryLicenseType', function() {
    it('returns null when no value', function() {
      let component = render(
        <LicenseType
          { ...props }
        />
      )
      assert.equal(component.find('.summary-section'), false);
    });

    it('lists which types of licenses the user has selected', function() {
      props.licenseType.type = ['car', 'unsure'];
      props.licenseType.needEndorsement = 'No'
      let component = render(
        <LicenseType
          { ...props }
        />
      )
      assert.ok(component.text().includes('Need to drive: Car, and I\'m not sure'), 'license type not rendered in summary');
    });
  });
  describe('ReducedFee', function() {
    it('returns null when no value', function(){

      let component = render(
        <ReducedFee 
          { ...props }
        />
      )
      assert.equal(component.find('.summary-section'), false);
    });

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
    it('returns null when no value', function(){
  
      let component = render(
        <HomeAddress
          { ...props }
        />
      )
      assert.equal(component.find('.summary-section'), false);
    });

  });
  describe('MailingAddress', function() {
    it('returns null when no value', function(){
  
      let component = render(
        <MailingAddress
          { ...props }
        />
      )
      assert.equal(component.find('.summary-section'), false);
    });
  });
  describe('TraitsHeightWeight', function() {
    it('returns null when no value', function(){
  
      let component = render(
        <TraitsHeightWeight
          { ...props }
        />
      )
      assert.equal(component.find('.summary-section'), false);
    });
  });
  describe('PhysicalTraits', function() {
    it('returns null when no value', function(){
  
      let component = render(
        <PhysicalTraits
          { ...props }
        />
      )
      assert.equal(component.find('.summary-section'), false);
    });
  });
  describe('OrganDonation', function() {
    it('returns null when no value', function(){
  
      let component = render(
        <OrganDonation
          { ...props }
        />
      )
      assert.equal(component.find('.summary-section'), false);
    });
  });
  describe('SocialSecurity', function() {
    it('returns null when no value', function(){
    
      let component = render(
        <SocialSecurity
          { ...props }
        />
      )
      assert.equal(component.find('.summary-section'), false);
    });
  });
  describe('LicenseIssues', function() {
    it('returns null when no value', function(){
      let component = render(
        <LicenseIssues
          { ...props }
        />
      )
      assert.equal(component.find('.summary-section'), false);
    });
  });
});

