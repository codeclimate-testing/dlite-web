'use strict';

import assert         from 'assert';
import 'jsdom-global/register';
import React          from 'react';
import { render }     from 'enzyme';
import data           from '../../support/data-helper';
import * as summary   from '../../../client/presentations/summary/index.js';

describe('Summary section', function() {

  describe('LegalName', function() {

  });
  describe('DateOfBirth', function() {

  });
  describe('CardType', function() {
    let CardType = summary.CardType;
    it('shows DL and ID when both are selected', function() {
      let cardType = {
        DL: true,
        ID: true
      };
      let component = render(
        <CardType 
          props = {data}
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
          props = {data}
          cardType = {cardType}
        />
      )
      assert.equal(component.text().includes('Card Type: DL'), true);
    });

  });
  describe('RealID', function() {

  });
  describe('ReducedFee', function() {

  });
  describe('HomeAddress', function() {

  });
  describe('MailingAddress', function() {

  });
  describe('TraitsHeightWeight', function() {

  });
  describe('PhysicalTraits', function() {

  });
  describe('OrganDonation', function() {

  });
  describe('SocialSecurity', function() {

  });
  describe('LicenseIssues', function() {

  });
});

