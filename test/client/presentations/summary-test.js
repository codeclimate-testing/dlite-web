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
  CardType,
  RealID,
  ReducedFee,
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
      assert.equal(component.find('.summary-section')[0].children.length, 4, true);
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
  describe('CardType', function() {
    it('shows DL and ID when both are selected', function() {
      let cardType = {
        DL: true,
        ID: true
      };
      let component = render(
        <CardType 
          { ...props }
          cardType = {cardType}
        />
      );
      assert.equal(component.text().includes('Card Types: DL and ID'), true);
    });
    it('shows DL when both are selected', function() {
      let cardType = {
        DL: true,
        ID: false
      };
      let component = render(
        <CardType 
          { ...props }
          cardType = {cardType}
        />
      )
      assert.equal(component.text().includes('Card Type: DL'), true);
    });

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
  describe('ReducedFee', function() {
    it('returns null when no value', function(){

      let component = render(
        <ReducedFee 
          { ...props }
        />
      )
      assert.equal(component.find('.summary-section'), false);
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

